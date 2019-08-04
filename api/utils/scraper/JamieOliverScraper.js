import BaseScraper from './BaseScraper'

class JamieOliverFoodScraper extends BaseScraper {
  constructor() {
    super({
      ingredients: '.ingred-list > li:not(.ingred-heading)',
      method: '.recipeSteps li',
      image: '.hero-wrapper img'
    })
  }

  handleIngredients(ingredients) {
    Array.prototype.forEach.call(ingredients, ({ children }) => {
      this.ingredients.push(children[0].data.trim().replace(/\s\s+/g, ' '))
    })
  }

  handleMethod(method) {
    Array.prototype.forEach.call(method, ({ children }) => {
      this.method.push(children[0].data)
    })
  }
}

export default JamieOliverFoodScraper

// const jamieOlverUrl =
//   "https://www.jamieoliver.com/recipes/pasta-recipes/spaghetti-with-anchovies-dried-chilli-pangrattato/";
// new JamieOliverFoodScraper(jamieOlverUrl);
