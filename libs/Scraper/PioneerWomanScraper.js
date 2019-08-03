import BaseScraper from './BaseScraper'

class PioneerWomanScraper extends BaseScraper {
  constructor() {
    super({
      ingredients: '.list-ingredients > li',
      method: '.panel-body',
      image: '.recipe-summary-thumbnail img'
    })
  }

  handleIngredients(ingredients) {
    Array.prototype.forEach.call(ingredients, item => {
      const amountSpan = cheerio('span[itemprop=amount]', item)
      const titleSpan = cheerio('span[itemprop=name]', item)

      this.ingredients.push({
        amount: amountSpan.text(),
        title: titleSpan.text()
      })
    })
  }

  handleMethod(method) {
    const methodArray = method.text().split(/\n+/)

    Array.prototype.forEach.call(methodArray, item => {
      const text = item.replace(/\t+/g, '')

      if (text) {
        this.method.push(text)
      }
    })
  }
}

export default PioneerWomanScraper

// const pioneerWomanUrl = "https://thepioneerwoman.com/cooking/honey-soy-salmon/";
// new PioneerWomanScraper(pioneerWomanUrl);
