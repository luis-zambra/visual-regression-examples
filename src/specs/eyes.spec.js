const { Eyes, Target } = require('@applitools/eyes-webdriverio');
const sites = require('../resources/sites.json');
const credentials = require('../resources/credentials.json');

describe('Visual regression tests using Applitools', function() {  
  this.timeout(180000);

  const eyes = new Eyes();
  eyes.setApiKey(credentials.applitools.apikey);
  eyes.setBatch({id: '202011161', name: 'applitools_example'});
  const selector = '.fixedHeaderContainer';

  it('WebdriverIO page navigation bar test with Applitools', async function() {
    browser.url(sites.webdriverio.home);
    //browser.url(sites.webdriverio.contribute);
    //browser.url(sites.webdriverio.blog);
    await eyes.open(browser, 'webdriverio', this.test.fullTitle());
    await eyes.check('navigation bar', Target.region(selector));
    await eyes.close();
  });
  it('The Internet dynamic content test with Applitools', async function() {
    browser.url(sites.theinternet.dynamic);
    eyes.setMatchLevel("Layout");
    await eyes.open(browser, 'the internet app', this.test.fullTitle());
    await eyes.check('dynamic content', Target.window());
    await eyes.close();
  });
  afterEach(async function() {
    await eyes.abortIfNotClosed();
  })
});