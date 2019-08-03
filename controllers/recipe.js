class RecipeController {
  show(req, res) {
    const url = req.body.url

    if (!url) {
      return res.status(404).send({
        success: false,
        message: 'url required'
      })
    }

    return res.status(200).send({
      success: true,
      message: 'Working need url'
    })
  }
}

const recipeController = new RecipeController()

export default recipeController
