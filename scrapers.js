const puppeteer = require('puppeteer');

async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    //replace file xpath after .$x
    //pictures need the srcTxt

    //if it doesnt work copy full xpath
    //tutorial: https://www.youtube.com/watch?v=TzZ3YOUhCxo

    const [el] = await page.$x('//*[@id="news-article-img-1"]');
    const src = await el.getProperty('src');
    const imgURL = await src.jsonValue();

    //words need the rawTxt

    //const [el2] = await page.$x('//*[@id="productTitle"]');
    //const txt = await el2.getProperty('textContent');
    //const title = await txt.jsonValue();

    const [el3] = await page.$x('//*[@id="os-home"]/div/div/main/section/article[1]/div/p');
    const txt2 = await el3.getProperty('textContent');
    const news = await txt2.jsonValue();

    console.log({imgURL, news});
}

scrapeProduct('https://oldschool.runescape.com/')
