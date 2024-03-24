import supertest from 'supertest'
import app from '../../src/app'

const request = supertest(app)

describe('Checking the health of the app', () => {
  test('It should respond with a health check message', async () => {
    const response = await request.get('/')
    expect(response.body).toEqual({ 'health-check': 'OK: top level api working' })
    expect(response.status).toBe(200)
  })
})
