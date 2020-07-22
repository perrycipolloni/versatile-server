// import React from 'react';
// import puppeteer from 'puppeteer'

// class LyricalLemonade extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             imagesrc: '',
//         }
//     }

//     componentDidMount() {
//         async function scrapeProduct(url) {
//             const browser = await puppeteer.launch();
//             const browserWSEndpoint = await browser.wsEndpoint();
//             const page = browserWSEndpoint.newPage();
//             await page.goto(url);

//             const [el] = await page.$x('//*[@id="__next"]/div/div[2]/div/div/div[1]/div[3]/img')
//             const src = await el.getProperty('src');
//             const srcTxt = await src.jsonValue();

//             console.log({srcTxt})
//             browser.close();
//             this.setState({
//                 imagesrc: srcTxt
//             })
//         }

//         const Scrape = scrapeProduct('https://lyricallemonade.com/p/bad-btch-blues-chase-alex')
//     }
//     render() {
        
//         return (
//             <div>
//                 <img src={this.state.srcTxt} />
//             </div>
//         )
//     }
// }

// export default LyricalLemonade;