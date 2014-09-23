# Library imports.
express = require 'express'
bodyParser = require 'body-parser'

# Configuration.
port = process.env.PORT or 3000

views =
  dir: 'views'
  engine: 'jade'

# Application setup.
app = express()

app.set 'views', views.dir
app.set 'view engine', views.engine

# Middleware
app.use bodyParser()

# Routing
app.get '/', (request, response) ->
  response.render 'log_in'

app.post '/sign-in', (request, response) ->
  # Retrieve client information.
  client =
    ip: request.ip
    channel: request.body['channel']
    nickname: request.body['nickname']

  # Just print it for now.
  response.send client

app.listen port

console.log "Listening at #{port}"
