import { ClientFunction } from 'testcafe'
const getWindowLocation = ClientFunction(() => window.location)
const baseUrl = 'http://localhost:3000/'

fixture('On the homepage (locahost) - ').page(baseUrl)
/* surprisingly the initialisation didn't work in here:

beforeEach( async t => {
  // test initialization code
})

*/

test('renders normally', async t => {
  /* This makes more sense to set-up a mobile test.
It worked locally but was noyt recognised by CircleCI

    await t.resizeWindowToFitDevice("iPhone 6", {
      portraitOrientation: true
    });

*/

  await t.resizeWindow(414, 736)

  const location = await getWindowLocation()
  await t.expect(location.href).contains(baseUrl)
})
