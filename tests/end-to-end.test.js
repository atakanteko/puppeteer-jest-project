import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import TopBar from '../pages/components/TopBar'
import FeedbackPage from '../pages/FeedbackPage'

describe('End-To-End Test', () => {
  let homepage
  let loginpage
  let topbar
  let feedback

  beforeAll(async () => {
    jest.setTimeout(150000);
    homepage = new HomePage();
    loginpage = new LoginPage();
    topbar = new TopBar();
    feedback = new FeedbackPage();
  })

  it('homepage should work', async () => {
    await homepage.visit();
  })

  it('navbar should be appeared', async ()=> {
    await homepage.isNavbarDisplayed();
    await topbar.isTopBarDisplayed();
  })

  it('login fail', async () => {
    await topbar.clickSignInButton();
    await loginpage.isLoginFormDisplayed();
    await loginpage.login("atakan","123456");
  })

  it('feedback should work', async () => {
    await feedback.visit();
    await feedback.isFeedbackFormDisplayed();
    await feedback.submitFeedback(
      "Ata",
      "atakantekoglu@gmail.com",
      "Personel",
      "Hello Puppeteer"
    );
    await feedback.wait(3000);
  })


})