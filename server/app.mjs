import express from 'express'
import http from 'http'
import { Server } from "socket.io"
import os from 'os'

import address from '../modules/address.mjs'
import client from '../modules/client.mjs'

const app = express()
const httpServer = http.Server(app)
const mainPath = '/Users/nita14/programming/javascript/murakami/chat_app'
const chatPath = `${mainPath}/client/index.html`

app.use(express.static(mainPath))
app.get('/', function (req, res) {
  console.log(req.url)
  res.sendFile(chatPath)
})
console.log(import.meta)

const io = new Server(httpServer)
client(io)

const IPv4 = address(os)
console.log(IPv4)

const port = 8081
httpServer.listen(port)