import { Router } from 'express'
import request from 'superagent'

const router = Router()

router.get('/', async (req,res) => {
  const level = req.query.level || '1'
  const area = req.query.area || 'sat'
  try {
    const result = await request.get('https://twinword-word-association-quiz.p.rapidapi.com/type1/')
      .query({ level, area})
      .set('X-RapidAPI-Key', process.env.API_KEY_QUIZ as string)
      .set('X-RapidAPI-Host', 'twinword-word-association-quiz.p.rapidapi.com')
    res.json(result.body)
  } catch (error) {
    res.status(500).json({error: 'Failed to fetch jokes'})
  }
})

export default router