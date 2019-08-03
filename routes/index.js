import express from 'express'

// Controllers
import recipeController from '../controllers/recipe'

const router = express.Router()

// Parser Routes
router.post('/api/v1/recipe/fetch', recipeController.fetch)

export default router
