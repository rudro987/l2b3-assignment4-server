import express, { Application, Request, Response } from 'express'
import cors from 'cors'

const app: Application = express()

//parsers

app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Appolo level-2 assignment 4 server!')
})

export default app
