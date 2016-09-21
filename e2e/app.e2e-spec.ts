import { SkillsetPage } from './app.po';

describe('skillset App', function() {
  let page: SkillsetPage;

  beforeEach(() => {
    page = new SkillsetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
