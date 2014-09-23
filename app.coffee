# Library imports.
express = require 'express'

# Configuration.
port = process.env.PORT or 3000

views =
  dir: 'views'
  engine: 'jade'

# Application setup.
app = express()

app.set 'views', views.dir
app.set 'view engine', views.engine

# Routing
app.get '/', (request, response) ->
  response.render 'log_in'

app.listen port

console.log "Listening at #{port}"
