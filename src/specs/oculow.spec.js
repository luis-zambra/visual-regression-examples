const sites = require('../resources/sites.json');
const credentials = require('../resources/credentials.json');
const Oculow = require('oculow');
const oculow = new Oculow.Oculow();

describe('Visual regression test using Oculow', () => {
  before(() => {
    oculow.setKeys(credentials.oculow.apikey, credentials.oculow.secretkey);
    oculow.setAppId('Shopping cart');
    oculow.setBaselineManagement(oculow.ASSISTED);
    oculow.setComparisonLogic(oculow.IGNORE_AA);
  });   
  it('Shopping cart test with Oculow', () => {
    browser.url(sites.shopping.home);
    oculow.captureScreen(browser, 'Shopping cart home');
  });
  after(() => {
    oculow.dispose(browser);
  });
});