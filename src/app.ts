import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import routes from './common/routes'
import unknownEndpoint from './middlewares/unknownEndpoint'
import errorHandler from './middlewares/errorHandler'

const app: Application = express()
const REQUEST_LIMIT = process.env.REQUEST_LIMIT || '100kb'

// middleware
app.disable('x-powered-by')
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(express.urlencoded({ extended: true, limit: REQUEST_LIMIT }))
app.use(express.json({ limit: REQUEST_LIMIT }))

// health check
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    'health-check': 'OK: top level api working',
  })
})

app.use('/v1/', routes)

// Handle unknown endpoints
app.use(unknownEndpoint)

// Handle errors passed to next() or thrown in handlers
app.use(errorHandler)

export default app
