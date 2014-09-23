# Library imports.
express = require 'express'

# Configuration.
port    = process.env.PORT or 3000

# Application setup.
app = express()

# Routing
app.get '/', (request, response) ->
  response.send 'It works!'

app.listen port

console.log "Listening at #{port}"
