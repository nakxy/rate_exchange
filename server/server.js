import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../webpack.config.js'
const isDeveloping = true;
const port = process.env.PORT || 8082
const app = express()

app.use(express.urlencoded())
app.use(express.json())

if (isDeveloping) {
    const compiler = webpack(config)
    const devMiddleware = webpackDevMiddleware(compiler, {
      hot: true,
      publicPath: config.output.publicPath,
      contentBase: 'app',
      // publicPath: 'static',
      stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
      }
    })
    console.log('Server started in development mode.')
    const hotMiddleware = webpackHotMiddleware(compiler, {
      log: console.log,
      path: '/__webpack_hmr',
      heartbeat: 10 * 1000
    })

    app.use(devMiddleware)
    app.use(hotMiddleware)
    
    app.get('*', (req, res) => {
        res.write(devMiddleware.fileSystem.readFileSync(path.resolve(__dirname, '../dist/index.html')))
        res.end()
      })

} else {
  // Production Mode
  console.log('Server started in production mode.')
  app.use(express.static(path.join(__dirname, '../dist')))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
  })
  app.use((req, res, next) => {
      res.sendFile(path.join(__dirname, '../dist/index.html'))
  })
}

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server running on http://0.0.0.0:%s/.', port)
})
