const puppeteer = require('puppeteer');

module.exports = {
  Search: async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.limetorrents.info/search/all/impractical jokers s08e13/");

    const result = await page.$$eval('table[class="table2"]', tds => tds.map(async (td) => {
      const title = td.querySelectorAll(".tt-name");
      const datetime = td.querySelectorAll(".tdnormal");
      const seeds = td.querySelectorAll(".tdseed");
      const leeches = td.querySelectorAll(".tdleech");
      const names = [];
      for (let i = 0; i < title.length; i++) {
        names.push({
          title: title[i].textContent,
          // size: datetime[i].textContent,
          seeds: seeds[i].textContent,
          leeches: leeches[i].textContent,
        });
      }
      return names;
    }));

    // const result = await page.$eval('table[class="table2"]', (td) => {
    //   return td.innerHTML;
    // });

    console.log(result);

    await browser.close();
  },
}