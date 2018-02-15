import { AngularPoloniexPage } from './app.po';

describe('angular-poloniex App', () => {
  let page: AngularPoloniexPage;

  beforeEach(() => {
    page = new AngularPoloniexPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
