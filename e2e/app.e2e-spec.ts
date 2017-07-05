import { NG4StarWarsPage } from './app.po';

describe('ng4-star-wars App', () => {
  let page: NG4StarWarsPage;

  beforeEach(() => {
    page = new NG4StarWarsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
