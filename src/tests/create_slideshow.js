const assert = require('assert')
const mocha = require('mocha')
const puppeteer = require('puppeteer')

mocha.describe('mathsnuggets', function () {
  let browser
  let page

  mocha.before(async function () {
    browser = await puppeteer.launch({ headless: true })
    page = await browser.newPage()
    await page.goto('http://localhost:5000/slideshow_builder')
  })

  mocha.after(async function () {
    browser.close()
  })

  mocha.it('changing the title', async function () {
    const identifier = 'section.present .slide-title'

    const checkTitle = async function (assertMethod, string) {
      const title = await page.$eval(identifier, el => el.value)
      assert[assertMethod](title, string)
    }

    await page.waitFor(identifier)
    await page.keyboard.press('Tab')
    await page.keyboard.type('Test')
    await page.keyboard.press('Enter')
    await checkTitle('equal', 'Test')

    await page.click(identifier)
    await page.keyboard.type('Hello')
    await page.keyboard.press('Enter')
    await checkTitle('equal', 'Hello')

    await page.keyboard.press('ArrowRight')
    await checkTitle('notEqual', 'Hello')
    await page.keyboard.press('ArrowLeft')
    await checkTitle('equal', 'Hello')
  })

  mocha.it('testing a widget', async function () {
    const widget = 'Equation'
    await page.hover('.widget-col')
    await page.select('.widget-col select', widget)
    await page.waitFor('span[name="equation"] input')
    await page.focus('span[name="equation"] input')
    await page.keyboard.type('x^2 - 5x + 6')
    await page.keyboard.press('Enter')
    await page.waitFor('span[name="solution"] button')
    await page.click('span[name="solution"] button')
  })
})
