import { SadProjectPage } from './app.po';

describe('sad-project App', () => {
  let page: SadProjectPage;

  beforeEach(() => {
    page = new SadProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
