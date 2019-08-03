import express from 'express'

// Controllers
import recipeController from '../controllers/recipe'

const router = express.Router()

// Parser Routes
router.get('/api/v1/recipe/fetch', recipeController.show)

export default router
