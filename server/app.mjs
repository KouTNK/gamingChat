import express from 'express'
import http from 'http'
import { Server } from "socket.io"
import os from 'os'
import path from "node:path"
import address from '../modules/address.mjs'
import client from '../modules/client.mjs'

const app = express()
const httpServer = http.Server(app)
const IPv4 = address(os)
const port = 8081
console.log(`http://${IPv4}:${port}/`)
httpServer.listen(port)

const dirname = path.dirname(new URL(import.meta.url).pathname)
const gamingChatDir = 'gamingChat'
const mainPath = dirname.split(gamingChatDir)[0] + gamingChatDir

app.use(express.static(mainPath))

const chatPath = `${mainPath}/client/index.html`
app.get('/', function (req, res) {
  console.log(req.url)
  res.sendFile(chatPath)
})

const io = new Server(httpServer)
client(io)