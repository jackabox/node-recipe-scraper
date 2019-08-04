import JamieOliverFoodScraper from '../libs/Scraper/JamieOliverScraper'
import PioneerWomanScraper from '../libs/Scraper/PioneerWomanScraper'
import BBCGoodFoodScraper from '../libs/Scraper/BBCGoodFoodScraper'

class RecipeController {
  async fetch(req, res) {
    const url = String(req.body.url)

    if (!url) {
      return res.status(404).send({
        success: false,
        message: 'url required'
      })
    }

    // check for the type of scraper needed
    // todo refactor this later - can't move this to it's own func
    let scraper = null

    if (url.includes('jamieoliver.com')) {
      scraper = new JamieOliverFoodScraper()
    } else if (url.includes('thepioneerwoman.com')) {
      console.log('inside pioneer')
      scraper = new PioneerWomanScraper()
    } else if (url.includes('bbcgoodfood.com')) {
      scraper = new BBCGoodFoodScraper()
    }

    // If no scraper return nothing
    if (scraper === null) {
      return res.status(404).send({
        success: false,
        message: 'scraper required'
      })
    }

    // wait for it to gather data
    await scraper.fetch(url)

    // return the data
    return res.status(200).send({
      success: true,
      data: scraper.data
    })
  }
}

const recipeController = new RecipeController()

export default recipeController
