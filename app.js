const express = require('express')
const { renderTemplate } = require('./stories')
const data = require('./data/data.json')
const app = express()
const port = 8081

app.get('/', (req, res) => {
    const theme = req.query.theme;
    module.exports.theme =  theme;
    const slideNumber = req.query.slide - 1;
    const slide = data[slideNumber];
    const alias = slide.alias;
    const info = slide.data;
    const template = renderTemplate(alias, info);
    res.send(template);
    // console.log('received request');
})
app.use(express.static('assets'));
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})