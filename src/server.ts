/* eslint-disable no-console */
import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function main() {
  try {
    //mongodb database connection using mongoose
    await mongoose.connect(config.db_url as string)
    //server
    app.listen(config.port, () => {
      console.log(`App listening on port ${config.port}`)
    })
  } catch (error) {
    console.error(error)
  }
}
main();
