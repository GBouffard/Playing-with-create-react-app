import { Selector, ClientFunction } from 'testcafe'

const getWindowLocation = ClientFunction(() => window.location)

const baseUrl = 'http://localhost:3000/'

fixture('On the homepage (locahost) - ').page(baseUrl)

test('renders normally', async t => {
  const location = await getWindowLocation()
  await t.expect(location.href).contains(baseUrl)
})

test('testing my redirected url', async t => {
  const myCanvasAnchor = await Selector('a[class^="App-grid__link"]').withText(
    'Canvas'
  )
  await t.click(myCanvasAnchor)

  const location = await getWindowLocation()

  await t.expect(location.href).contains('/canvas')
})

test('testing another redirected url using find', async t => {
  const grid = Selector('.App-grid')
  const IframesAnchor = grid.find('a').withText('Iframes')

  await t
    .expect(IframesAnchor.exists)
    .ok()
    .click(IframesAnchor)

  const location = await getWindowLocation()
  await t.expect(location.href).contains('/iframes')
})
