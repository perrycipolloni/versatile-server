const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// DEBUG:
// Router
// const indexRouter = require('./routes/index');
// app.use('/', indexRouter);

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Are You Versatile?' })
})

// END


// API calls
// app.get('/api/hello', (req, res) => {
//   res.send({ express: 'Hello From Versatile Express' });
// });

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
    
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));

// // PUPPETEER
// const puppeteer = require('puppeteer');

//         async function scrapeProduct(url) {
//             const browser = await puppeteer.launch();
//             const page = await browser.newPage();
//             await page.goto(url);

//             const [el] = await page.$x('//*[@id="__next"]/div/div[2]/div/div/div[1]/div[3]/img')
//             const src = await el.getProperty('src');
//             const srcTxt = await src.jsonValue();

//             console.log({srcTxt})
//             browser.close();
//             return srcTxt;
//         }

//        scrapeProduct('https://lyricallemonade.com/p/bad-btch-blues-chase-alex')

    
//        console.log(this.srcTxt)
