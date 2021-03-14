const express = require('express');
const data = require('../data/data.json');
const app = express();
const port = 8081;
const themes = ['light', 'dark'];

const renderWrappedPage = (theme, alias, data) => {
  return `
  <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>ШРИ</title>
        <link rel="stylesheet" href="stories.css">
    </head>
    <body class="theme_${theme}">
        <script type="text/javascript" src="stories.js"></script>
        <script>
            const body = document.querySelector('body');
            body.innerHTML = window.renderTemplate('${alias}', ${JSON.stringify(data)})
        </script>
    </body>
  </html>
  `;
}

const getPage = (req) => {
  const theme = themes.includes(req.query.theme) ? req.query.theme : 'dark';
  const slide = data[(req.query.slide || 1) - 1];

  return renderWrappedPage(theme, slide.alias, slide.data);
}

app.get('/', (req, res) => {
  res.send(getPage(req));
})

app.use(express.static('build'));
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
})