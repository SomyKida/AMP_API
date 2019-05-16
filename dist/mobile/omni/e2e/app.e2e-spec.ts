import { OmniPage } from './app.po';

describe('omni App', function() {
  let page: OmniPage;

  beforeEach(() => {
    page = new OmniPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
