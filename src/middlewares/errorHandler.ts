import { NextFunction, Request, Response } from 'express'
import logger from '../common/logger'

// Errors from Express/body-parser (http-errors) carry a status and whether the message is safe to show
type HttpError = Error & { status?: number; expose?: boolean }

// Express recognises error handlers by their 4 arguments, so `next` must stay
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler = (err: HttpError, req: Request, res: Response, next: NextFunction) => {
  const status = err.status && err.status >= 400 && err.status < 600 ? err.status : 500

  if (status >= 500) {
    logger.error({ err }, `${req.method} ${req.originalUrl} failed`)
  }

  res.status(status).send({ error: err.expose ? err.message : 'internal server error' })
}

export default errorHandler
