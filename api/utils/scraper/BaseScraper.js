const request = require('request-promise')
const cheerio = require('cheerio')

class BaseScraper {
  constructor(scrapeTargets) {
    this.ingredients = []
    this.method = []
    this.image = []
    this.toScrape = scrapeTargets
  }

  async fetch(url) {
    await request(url)
      .then(html => {
        let ingredients = cheerio(this.toScrape.ingredients, html)
        console.log(ingredients)
        this.handleIngredients(ingredients)

        let method = cheerio(this.toScrape.method, html)
        this.handleMethod(method)

        let image = cheerio(this.toScrape.image, html)
        this.handleImage(image)
      })
      .catch(error => {
        console.log(error)
      })

    console.log({
      ingredients: this.ingredients,
      method: this.method,
      image: this.image
    })
  }

  handleIngredients(ingredients) {
    console.log(ingredients)
    // @todo implement here
  }

  handleMethod(method) {
    console.log(method)
    // @todo implement here
  }

  handleImage(image) {
    if (image.length) {
      this.image = image[0].attribs.src
    }
  }

  get data() {
    return {
      ingredients: this.ingredients,
      method: this.method,
      image: this.image
    }
  }
}

export default BaseScraper
