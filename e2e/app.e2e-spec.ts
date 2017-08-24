import { TestTaskServiceDirectoryContactPagePage } from './app.po';

describe('test-task-service-directory-contact-page App', () => {
  let page: TestTaskServiceDirectoryContactPagePage;

  beforeEach(() => {
    page = new TestTaskServiceDirectoryContactPagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
