import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'

describe('Google', () => {
  let homepage
  let loginpage

  beforeAll(async () => {
    jest.setTimeout(150000);
    homepage = new HomePage();
    loginpage = new LoginPage();
  })

  it('homepage should work', async () => {
    await homepage.visit();
  })

  it('navbar should be appeared', async ()=> {
    await homepage.isNavbarDisplayed();
  })

  it('login fail', async () => {
    await loginpage.failLogin("atakan","123456");
  })

})