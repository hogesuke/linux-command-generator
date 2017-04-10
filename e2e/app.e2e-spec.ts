import { LinuxCommandGeneratorPage } from './app.po';

describe('linux-command-generator App', () => {
  let page: LinuxCommandGeneratorPage;

  beforeEach(() => {
    page = new LinuxCommandGeneratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
