import { ElmaPage } from './app.po';

describe('elma App', () => {
  let page: ElmaPage;

  beforeEach(() => {
    page = new ElmaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
