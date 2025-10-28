const puppeteer = require('puppeteer');

async function fetchAllListings() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  try {
    console.log('Loading broker page...');
    await page.goto('https://www.propertyfinder.ae/en/broker/nassira-realty-group-9824', {
      waitUntil: 'domcontentloaded',
      timeout: 30000
    });
    
    // Wait a bit for JS to execute
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    console.log('Extracting property data from page state...');
    
    // Get all properties from __NEXT_DATA__
    const allProperties = await page.evaluate(() => {
      const script = document.getElementById('__NEXT_DATA__');
      if (!script) {
        console.log('No __NEXT_DATA__ script found');
        return { properties: [], meta: {} };
      }
      
      try {
        const data = JSON.parse(script.textContent);
        const pageProps = data?.props?.pageProps || {};
        const properties = pageProps?.properties || {};
        const dataObj = properties?.data || {};
        const props = dataObj?.properties || [];
        const meta = dataObj?.meta || {};
        
        console.log('Found data structure:', {
          hasProps: !!pageProps.properties,
          hasData: !!properties.data,
          propsCount: props.length
        });
        
        return {
          properties: props,
          meta: meta,
          total: meta.total_count || props.length
        };
      } catch (e) {
        console.error('Error parsing data:', e);
        return { properties: [], meta: {} };
      }
    });
    
    console.log(`Found ${allProperties.properties.length} properties on first page`);
    console.log(`Meta says total_count: ${allProperties.meta.total_count}`);
    
    let allProps = [...allProperties.properties];
    const totalCount = allProperties.meta.total_count || 0;
    const pageCount = allProperties.meta.page_count || 1;
    
    console.log(`Total count according to meta: ${totalCount}, Pages: ${pageCount}`);
    
    // Try loading additional pages by navigating directly
    for (let pageNum = 2; pageNum <= pageCount && pageNum <= 5; pageNum++) {
      console.log(`\nLoading page ${pageNum}...`);
      try {
        await page.goto(`https://www.propertyfinder.ae/en/broker/nassira-realty-group-9824?page=${pageNum}`, {
          waitUntil: 'domcontentloaded',
          timeout: 30000
        });
        
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        const pageData = await page.evaluate(() => {
          const script = document.getElementById('__NEXT_DATA__');
          if (!script) return [];
          const data = JSON.parse(script.textContent);
          return data?.props?.pageProps?.properties?.data?.properties || [];
        });
        
        if (pageData.length > 0) {
          const existingIds = new Set(allProps.map(p => p.id));
          const newProps = pageData.filter(p => !existingIds.has(p.id));
          if (newProps.length > 0) {
            allProps.push(...newProps);
            console.log(`  Got ${newProps.length} new properties (${allProps.length} total)`);
          } else {
            console.log(`  Page ${pageNum} returned duplicates, stopping`);
            break;
          }
        } else {
          console.log(`  No properties on page ${pageNum}`);
          break;
        }
      } catch (err) {
        console.log(`  Error loading page ${pageNum}: ${err.message}`);
        break;
      }
    }
    
    // Also check rent category
    console.log('\nFetching rent listings...');
    await page.goto('https://www.propertyfinder.ae/en/broker/nassira-realty-group-9824?category=2', {
      waitUntil: 'domcontentloaded',
      timeout: 30000
    });
    
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const rentData = await page.evaluate(() => {
      const script = document.getElementById('__NEXT_DATA__');
      if (!script) return { properties: [], meta: {} };
      const data = JSON.parse(script.textContent);
      return {
        properties: data?.props?.pageProps?.properties?.data?.properties || [],
        meta: data?.props?.pageProps?.properties?.data?.meta || {}
      };
    });
    
    console.log(`Found ${rentData.properties.length} rental properties on page 1`);
    console.log(`Rent meta says total: ${rentData.meta.total_count || 0}, pages: ${rentData.meta.page_count || 1}`);
    
    // Merge rent properties
    const existingIds = new Set(allProps.map(p => p.id));
    let rentProps = rentData.properties.filter(p => !existingIds.has(p.id));
    allProps.push(...rentProps);
    
    // Try loading additional rent pages
    const rentPageCount = rentData.meta.page_count || 1;
    for (let pageNum = 2; pageNum <= rentPageCount && pageNum <= 5; pageNum++) {
      console.log(`  Loading rent page ${pageNum}...`);
      try {
        await page.goto(`https://www.propertyfinder.ae/en/broker/nassira-realty-group-9824?category=2&page=${pageNum}`, {
          waitUntil: 'domcontentloaded',
          timeout: 30000
        });
        
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        const pageData = await page.evaluate(() => {
          const script = document.getElementById('__NEXT_DATA__');
          if (!script) return [];
          const data = JSON.parse(script.textContent);
          return data?.props?.pageProps?.properties?.data?.properties || [];
        });
        
        if (pageData.length > 0) {
          const existingIds = new Set(allProps.map(p => p.id));
          const newProps = pageData.filter(p => !existingIds.has(p.id));
          if (newProps.length > 0) {
            allProps.push(...newProps);
            console.log(`    Got ${newProps.length} new rental properties (${allProps.length} total)`);
          } else {
            console.log(`    Page ${pageNum} returned duplicates`);
            break;
          }
        } else {
          break;
        }
      } catch (err) {
        console.log(`    Error: ${err.message}`);
        break;
      }
    }
    
    console.log(`\nTotal unique properties: ${allProps.length}`);
    
    return allProps;
    
  } finally {
    await browser.close();
  }
}

fetchAllListings()
  .then(properties => {
    const fs = require('fs');
    fs.writeFileSync('/tmp/all_listings.json', JSON.stringify(properties, null, 2));
    console.log(`\n✅ Saved ${properties.length} properties to /tmp/all_listings.json`);
  })
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });

