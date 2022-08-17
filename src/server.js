const httpServer = require('http-server');
const path = require('path')
const dotenv = require('dotenv').config()

const port = process.env.SERVER_PORT || 3000

const staticSource = path.resolve(__dirname, '../dist/')

const server = httpServer.createServer({
    root: staticSource,
    robots: false,
    gzip: true,
  })

server.listen(port, () => {
    console.log(`HTTP-Server running @ port ${port}`)
  })