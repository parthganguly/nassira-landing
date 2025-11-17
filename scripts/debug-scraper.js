const puppeteer = require('puppeteer');

async function debug() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({ 
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  try {
    console.log('Loading Property Finder page...');
    await page.goto('https://www.propertyfinder.ae/en/broker/nassira-realty-group-9824?properties%5Bfilter%5Bcategory_id%5D%5D=1', {
      waitUntil: 'networkidle2',
      timeout: 60000
    });
    
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    const debug = await page.evaluate(() => {
      const script = document.getElementById('__NEXT_DATA__');
      if (!script) {
        return { error: '__NEXT_DATA__ script not found' };
      }
      
      try {
        const data = JSON.parse(script.textContent);
        const pageProps = data?.props?.pageProps || {};
        const properties = pageProps?.properties || {};
        const dataObj = properties?.data || {};
        const props = dataObj?.properties || [];
        
        return {
          hasScript: true,
          hasData: !!data,
          hasProps: !!data?.props,
          hasPageProps: !!pageProps,
          hasProperties: !!pageProps.properties,
          hasData: !!properties.data,
          propsCount: props.length,
          keys: Object.keys(pageProps),
          sample: props[0]
        };
      } catch (e) {
        return { error: e.message };
      }
    });
    
    console.log('\n🔍 Debug Info:');
    console.log(JSON.stringify(debug, null, 2));
    
  } finally {
    await browser.close();
  }
}

debug().catch(console.error);










