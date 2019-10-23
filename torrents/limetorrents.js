const puppeteer = require('puppeteer');

module.exports = {
  SearchLime: async (query) => {
    const browser = await puppeteer.launch({
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
      ]
    });
    const page = await browser.newPage();
    await page.goto(`https://www.limetorrents.info/search/all/${query}/`);

    const result = await page.$eval('table[class="table2"]', (td) => {
      const title = td.querySelectorAll('div[class="tt-name"]');
      const link = td.querySelectorAll('a[class="csprite_dl14"]');
      const seeds = td.querySelectorAll('td[class="tdseed"]');
      const leeches = td.querySelectorAll('td[class="tdleech"]');
      const release_date = td.querySelectorAll('td[class="tdnormal"]:nth-child(2)');
      const size = td.querySelectorAll('td[class="tdnormal"]:nth-child(3)');
      const names = [];
      for (let i = 0; i < title.length; i++) {
        names.push({
          "Title": title[i].textContent,
          "Release Date": release_date[i].textContent,
          "Size": size[i].textContent,
          "Seeds": seeds[i].textContent,
          "Leeches": leeches[i].textContent,
          "Torrent": link[i].getAttribute("href")
        });
      }
      return names;
    });

    await browser.close();

    return result;
  },
  SearchPirate: async (query) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://thepiratebay.org/search/${query}/0/99/0`);

    const result = await page.$eval('table[id="searchResult"]', (td) => {
      // const title = td.querySelectorAll('div[class="detName"]');
      // const release_date = td.querySelectorAll('font[class="detDesc"]');
      // const seeds = td.querySelectorAll('td[align="right"]:nth-child(2)');

      // const names = [];
      // for (let i = 0; i < title.length; i++) {
      //   names.push({
      //     "Title": title[i].textContent,
      //     "Release Date": release_date[i].textContent.split("Uploaded ")[1].toString().split("&nbsp;").join("-").split(",")[0],
      //     "Seeds": seeds[i].textContent
      //   });
      // }
      return td.innerHTML;
    });

    console.log(result);

    await browser.close();

    return result;
  },
}