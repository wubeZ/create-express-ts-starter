import express from 'express'
import supertest from 'supertest'
import { describe, expect, test } from 'vitest'
import app from '../src/app'
import errorHandler from '../src/middlewares/errorHandler'

const request = supertest(app)

describe('Checking the health of the app', () => {
  test('It should respond with a health check message', async () => {
    const response = await request.get('/')
    expect(response.body).toEqual({ 'health-check': 'OK: top level api working' })
    expect(response.status).toBe(200)
  })
})

describe('Unknown endpoints', () => {
  test('It should respond with 404 for unknown routes', async () => {
    const response = await request.get('/does-not-exist')
    expect(response.status).toBe(404)
    expect(response.body).toEqual({ error: 'unknown endpoint' })
  })
})

describe('Error handler', () => {
  test('It should respond with 500 when a handler throws', async () => {
    const failingApp = express()
    failingApp.get('/boom', () => {
      throw new Error('boom')
    })
    failingApp.use(errorHandler)

    const response = await supertest(failingApp).get('/boom')
    expect(response.status).toBe(500)
    expect(response.body).toEqual({ error: 'internal server error' })
  })

  test('It should respond with 400 for malformed JSON', async () => {
    const response = await request.post('/v1/user').set('Content-Type', 'application/json').send('{bad')
    expect(response.status).toBe(400)
  })
})
