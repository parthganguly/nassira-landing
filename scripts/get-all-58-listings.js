const puppeteer = require('puppeteer');

async function getAllListings() {
  console.log('🚀 Launching browser to extract all 58 listings...\n');
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  try {
    const allListings = [];
    
    // Fetch SALE listings
    console.log('📋 Fetching FOR SALE listings...');
    await page.goto('https://www.propertyfinder.ae/en/broker/nassira-realty-group-9824?properties%5Bfilter%5Bcategory_id%5D%5D=1', {
      waitUntil: 'networkidle2',
      timeout: 60000
    });
    
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    let saleListings = await page.evaluate(() => {
      const script = document.getElementById('__NEXT_DATA__');
      if (!script) return [];
      const data = JSON.parse(script.textContent);
      const props = data?.props?.pageProps?.properties?.data?.properties || [];
      
      // Try to extract URLs from the page DOM as well
      const links = Array.from(document.querySelectorAll('a[href*="/plp/"]'));
      const urlMap = {};
      links.forEach(link => {
        const href = link.getAttribute('href');
        const match = href.match(/-(\d+)\.html$/);
        if (match) {
          urlMap[match[1]] = href.startsWith('http') ? href : `https://www.propertyfinder.ae${href}`;
        }
      });
      
      // Attach URLs to properties
      return props.map(p => ({
        ...p,
        pfUrl: urlMap[p.id] || null
      }));
    });
    
    console.log(`   Found ${saleListings.length} on page 1`);
    
    // Try scrolling to load more
    for (let i = 0; i < 5; i++) {
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const newData = await page.evaluate(() => {
        const script = document.getElementById('__NEXT_DATA__');
        if (!script) return null;
        const data = JSON.parse(script.textContent);
        const props = data?.props?.pageProps?.properties?.data?.properties || [];
        
        const links = Array.from(document.querySelectorAll('a[href*="/plp/"]'));
        const urlMap = {};
        links.forEach(link => {
          const href = link.getAttribute('href');
          const match = href.match(/-(\d+)\.html$/);
          if (match) {
            urlMap[match[1]] = href.startsWith('http') ? href : `https://www.propertyfinder.ae${href}`;
          }
        });
        
        return props.map(p => ({
          ...p,
          pfUrl: urlMap[p.id] || null
        }));
      });
      
      if (newData && newData.length > saleListings.length) {
        saleListings = newData;
        console.log(`   After scroll ${i+1}: ${saleListings.length} total`);
      }
    }
    
    allListings.push(...saleListings.map(p => ({ ...p, category: 'sale' })));
    console.log(`✅ Total sale listings: ${saleListings.length}\n`);
    
    // Fetch RENT listings
    console.log('📋 Fetching FOR RENT listings...');
    await page.goto('https://www.propertyfinder.ae/en/broker/nassira-realty-group-9824?properties%5Bfilter%5Bcategory_id%5D%5D=2', {
      waitUntil: 'networkidle2',
      timeout: 60000
    });
    
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    let rentListings = await page.evaluate(() => {
      const script = document.getElementById('__NEXT_DATA__');
      if (!script) return [];
      const data = JSON.parse(script.textContent);
      const props = data?.props?.pageProps?.properties?.data?.properties || [];
      
      const links = Array.from(document.querySelectorAll('a[href*="/plp/"]'));
      const urlMap = {};
      links.forEach(link => {
        const href = link.getAttribute('href');
        const match = href.match(/-(\d+)\.html$/);
        if (match) {
          urlMap[match[1]] = href.startsWith('http') ? href : `https://www.propertyfinder.ae${href}`;
        }
      });
      
      return props.map(p => ({
        ...p,
        pfUrl: urlMap[p.id] || null
      }));
    });
    
    console.log(`   Found ${rentListings.length} on page 1`);
    
    // Try scrolling to load more
    for (let i = 0; i < 5; i++) {
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const newData = await page.evaluate(() => {
        const script = document.getElementById('__NEXT_DATA__');
        if (!script) return null;
        const data = JSON.parse(script.textContent);
        const props = data?.props?.pageProps?.properties?.data?.properties || [];
        
        const links = Array.from(document.querySelectorAll('a[href*="/plp/"]'));
        const urlMap = {};
        links.forEach(link => {
          const href = link.getAttribute('href');
          const match = href.match(/-(\d+)\.html$/);
          if (match) {
            urlMap[match[1]] = href.startsWith('http') ? href : `https://www.propertyfinder.ae${href}`;
          }
        });
        
        return props.map(p => ({
          ...p,
          pfUrl: urlMap[p.id] || null
        }));
      });
      
      if (newData && newData.length > rentListings.length) {
        rentListings = newData;
        console.log(`   After scroll ${i+1}: ${rentListings.length} total`);
      }
    }
    
    allListings.push(...rentListings.map(p => ({ ...p, category: 'rent' })));
    console.log(`✅ Total rent listings: ${rentListings.length}\n`);
    
    // Deduplicate
    const seen = new Set();
    const unique = allListings.filter(p => {
      if (seen.has(p.id)) return false;
      seen.add(p.id);
      return true;
    });
    
    console.log(`\n📊 Total unique listings: ${unique.length}`);
    console.log(`   Sale: ${unique.filter(p => p.category === 'sale').length}`);
    console.log(`   Rent: ${unique.filter(p => p.category === 'rent').length}`);
    
    return unique;
    
  } finally {
    await browser.close();
  }
}

// Format and save
getAllListings()
  .then(props => {
    const fs = require('fs');
    
    // Convert to our format
    function parseBedrooms(b) {
      if (!b) return 0;
      if (typeof b === 'number') return b;
      if (typeof b === 'string' && b.toLowerCase() === 'studio') return 0;
      return parseInt(b) || 0;
    }
    
    function parseBathrooms(b) {
      if (!b) return 0;
      if (typeof b === 'number') return b;
      return parseInt(b) || 0;
    }
    
    // Helper to convert property type to Property Finder URL slug
    function getPropertySlug(propertyType) {
      const type = (propertyType || '').toLowerCase();
      const slugMap = {
        'villa': 'villa',
        'apartment': 'apartment',
        'townhouse': 'townhouse',
        'penthouse': 'penthouse',
        'land': 'land',
        'studio': 'studio',
        'office': 'office',
        'shop': 'shop',
        'warehouse': 'warehouse'
      };
      return slugMap[type] || 'property';
    }
    
    const formatted = props.map(prop => {
      const period = prop.price?.period || 'sell';
      const isRent = period === 'yearly' || period === 'monthly' || period === 'rent';
      
      const priceValue = prop.price?.value;
      let price = 'Price on Request';
      if (priceValue) {
        if (isRent) {
          price = period === 'monthly' 
            ? `AED ${priceValue.toLocaleString()}/month`
            : `AED ${priceValue.toLocaleString()}/year`;
        } else {
          price = `AED ${priceValue.toLocaleString()}`;
        }
      }
      
      const images = prop.images || [];
      const image = images[0]?.medium || images[0]?.small || '/placeholder.svg?height=400&width=600';
      
      // Use extracted Property Finder URL if available, check multiple sources
      let propertyUrl = prop.pfUrl || prop.url || prop.slug;
      
      // Property Finder might have slug in different formats, try to construct from available data
      if (!propertyUrl) {
        // Check if property has a canonical URL or permalink field
        propertyUrl = prop.canonical || prop.permalink || prop.href;
      }
      
      if (!propertyUrl) {
        // Fallback: construct URL from property data
        // Property Finder uses /en/plp/[buy|rent]/[slug]-[id].html format
        const category = isRent ? 'rent' : 'buy';
        
        // Try to build slug from property slug if available
        let slug = '';
        if (prop.slug) {
          slug = prop.slug;
        } else if (prop.title_slug) {
          slug = prop.title_slug;
        } else {
          // Create a basic slug from title and location
          if (prop.title) {
            slug = prop.title.toLowerCase()
              .replace(/[^a-z0-9\s-]/g, '')
              .replace(/\s+/g, '-')
              .substring(0, 50);
          }
          if (prop.location?.city) {
            const city = prop.location.city.toLowerCase().replace(/\s+/g, '-');
            slug = slug ? `${slug}-${city}` : city;
          }
          if (!slug) {
            slug = getPropertySlug(prop.property_type);
          }
        }
        
        // Final URL construction
        propertyUrl = `https://www.propertyfinder.ae/en/plp/${category}/${slug}-${prop.id}.html`;
      }
      
      // Ensure URL is absolute
      if (propertyUrl && !propertyUrl.startsWith('http')) {
        propertyUrl = `https://www.propertyfinder.ae${propertyUrl}`;
      }
      
      return {
        id: parseInt(prop.id),
        type: (prop.property_type || 'PROPERTY').toUpperCase(),
        status: isRent ? 'FOR RENT' : 'FOR SALE',
        price: price,
        title: (prop.title || 'Luxury Property').trim(),
        location: prop.location?.full_name || 'Dubai, UAE',
        beds: parseBedrooms(prop.bedrooms),
        baths: parseBathrooms(prop.bathrooms),
        sqft: prop.size?.value || 0,
        image: image,
        url: propertyUrl
      };
    });
    
    // Sort by ID
    formatted.sort((a, b) => a.id - b.id);
    
    fs.writeFileSync('/tmp/all_listings_final.json', JSON.stringify(formatted, null, 2));
    
    const saleCount = formatted.filter(l => l.status === 'FOR SALE').length;
    const rentCount = formatted.filter(l => l.status === 'FOR RENT').length;
    
    console.log(`\n✅ Saved ${formatted.length} formatted listings:`);
    console.log(`   For Sale: ${saleCount}`);
    console.log(`   For Rent: ${rentCount}`);
    console.log(`\n📁 Saved to: /tmp/all_listings_final.json`);
  })
  .catch(err => {
    console.error('❌ Error:', err.message);
    process.exit(1);
  });

