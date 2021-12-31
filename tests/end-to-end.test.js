import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import TopBar from '../pages/components/TopBar'
import FeedbackPage from '../pages/FeedbackPage'

describe('End-To-End Test', () => {
  let homePage
  let loginPage
  let topBar
  let feedBack

  beforeAll(async () => {
    jest.setTimeout(150000);
    homePage = new HomePage();
    loginPage = new LoginPage();
    topBar = new TopBar();
    feedBack = new FeedbackPage();
  })

  it("should load homepage", async () => {
    await homePage.visit();
    await homePage.isNavbarDisplayed();
  })

  it("should submit feedback", async () => {
    await homePage.clickFeedbackLink();
    await feedBack.isFeedbackFormDisplayed();
    await feedBack.submitFeedback(
      "Ata",
      "atakantekoglu@gmail.com",
      "Personel",
      "Hello Puppeteer"
    );
  })


})