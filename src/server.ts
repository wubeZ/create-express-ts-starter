import app from './app'
import * as os from 'os'
import logger from './common/logger'
import { connectDB, disconnectDB } from './services/db'

const PORT = process.env.PORT || 8000

const start = async () => {
  await connectDB()

  const server = app.listen(PORT, () => {
    logger.info(`up and running in ${process.env.NODE_ENV || 'development'} @: ${os.hostname()} on port ${PORT}`)
  })

  // Graceful shutdown
  const shutdown = (signal: string) => {
    logger.info(`${signal} received, shutting down`)
    server.close(async () => {
      await disconnectDB()
      process.exit(0)
    })
  }

  process.on('SIGTERM', () => shutdown('SIGTERM'))
  process.on('SIGINT', () => shutdown('SIGINT'))
}

start().catch((err) => {
  logger.fatal({ err }, 'failed to start server')
  process.exit(1)
})
