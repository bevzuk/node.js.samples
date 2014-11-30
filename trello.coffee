console.log "This is a trello coffee app"

boardInfoUrl = "https://api.trello.com/1/board/545b51f6ffba0c11811b9379?key=cd8896c63e07fd1cb025c0abb979ad6e&token=c25743a06fc5ba67fa7923960248d97524ae44ebe0678f24b6a0b5bf9136ba71"

request = require 'request'

request boardInfoUrl, (error, response, body) ->
  if !error && response.statusCode == 200
    json = JSON.parse(body)
    console.log json