import { HelloRxjsPage } from './app.po';

describe('hello-rxjs App', function() {
  let page: HelloRxjsPage;

  beforeEach(() => {
    page = new HelloRxjsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
