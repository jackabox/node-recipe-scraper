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
        // author
        // categories

        // ingredients
        let ingredients = cheerio(this.toScrape.ingredients, html)
        this.handleIngredients(ingredients)

        // image
        let image = cheerio(this.toScrape.image, html)
        this.handleImage(image)

        // method
        let method = cheerio(this.toScrape.method, html)
        this.handleMethod(method)

        // cookTime
        // prepTime
        // description
        // name
        // totalTime
        // url
        // servings
        // source
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleIngredients(ingredients) {
    // @todo implement here
  }

  handleMethod(method) {
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
