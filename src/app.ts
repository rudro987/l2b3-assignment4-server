import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './routes'
import globalErrorHandler from './middleWares/globalErrorHandler'
import notFound from './middleWares/notFound'

const app: Application = express()

//parsers

app.use(express.json())
app.use(cors())

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from ctrl+alt+del server!')
})

app.use(globalErrorHandler);

app.use(notFound);

export default app
