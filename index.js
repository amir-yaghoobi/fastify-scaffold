const fastify = require('fastify')()

const PORT = '3000'

/*
    fastify.HTTP_METHOD('PATH', callback)
    e.g:
        fastify.get
        fastify.post
        fastify.put
        fastify.delete
 */

fastify.get('/', async (req, res) => {
    const {query} = req
    // do whatever you want with query variable
    // localhost:3000/?name=amir => query = {name: 'amir'}
    const sampleJSON = {
        time: Date.now(),
        version: '1.0.0',
        query: query
    }
    return sampleJSON
})

fastify.post('/user', async(req, res) => {
    const {body} = req // POST body

    return {
        status: 200,
        body: body
    }
})


fastify.listen(PORT) // start API
    .then(_ => {
        console.log('API started and listening on port: %s', PORT)
    })
    .catch(err => {
        console.error('cannot start API on port: %s, error: %s', PORT, err)
    })