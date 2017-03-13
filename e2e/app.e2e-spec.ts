import { SystemMonitoringWebPage } from './app.po';

describe('system-monitoring-web App', () => {
  let page: SystemMonitoringWebPage;

  beforeEach(() => {
    page = new SystemMonitoringWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
