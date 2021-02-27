const express = require('express')
const { renderTemplate } = require('./stories')
const data = require('./data/data.json')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    const slide = data[0]; //TODO: remove later
    const alias = 'leaders';
    const info = slide.data;
    // retrieve slide and theme from req
    // renderTemplate
    // send template to user
//   res.send(renderTemplate(alias, info))
  res.send('hello');
})
app.get('/about', (req, res) => {
    res.send('about project');
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})