import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import TopBar from '../pages/components/TopBar'

describe('Google', () => {
  let homepage
  let loginpage
  let topbar

  beforeAll(async () => {
    jest.setTimeout(150000);
    homepage = new HomePage();
    loginpage = new LoginPage();
    topbar = new TopBar();
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
    await loginpage.failLogin("atakan","123456");
  })

})