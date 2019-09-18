import BaseScraper from './BaseScraper'

class BBCGoodFoodScraper extends BaseScraper {
  constructor() {
    super({
      ingredients: '.ingredients-list__group > li',
      method: '.method__item p',
      image: '.recipe-header__media .img-container img'
    })
  }

  handleIngredients(ingredients) {
    Array.prototype.forEach.call(ingredients, item => {
      this.ingredients.push(item.attribs.content)
    })
  }

  handleMethod(method) {
    Array.prototype.forEach.call(method, ({ children }) => {
      let childHtml = ''

      Array.prototype.forEach.call(children, ({ data }) => {
        childHtml = childHtml + data
      })

      this.method.push(childHtml)
    })
  }
}

export default BBCGoodFoodScraper

// const bbcGoodFoodUrl =
//   "https://www.bbcgoodfood.com/recipes/crab-asparagus-pappardelle";
// new BBCGoodFoodScraper(bbcGoodFoodUrl);
