const puppeteer = require('puppeteer');

module.exports = {
  Search: async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.limetorrents.info/search/all/impractical jokers s08e13/");

    const datetime = page.$$eval('td[class="tdnormal"]:nth-child(2)', items => items.map((item) => {
      return item.textContent;
    }));
    
    const result = await page.$$eval('table[class="table2"]', tds => tds.map(async (td) => {
      const datetime = td.querySelectorAll('td[class="tdnormal"]:nth-child(2)');
      // const title = td.querySelectorAll(".tt-name");
      // const seeds = td.querySelectorAll(".tdseed");
      // const leeches = td.querySelectorAll(".tdleech");
      const names = [];
      // for (let i = 0; i < title.length; i++) {
      //   names.push({
      //     "Title": title[i].textContent,
      //     "Size": datetime[i].textContent,
      //     "Seeds": seeds[i].textContent,
      //     "Leeches": leeches[i].textContent,
      //   });
      // }
      for (let i = 0; i < datetime.length; i++) {
        names.push({
          "Name": datetime[i].textContent,
        });
      }
      // return names;
      return names;
    }));

    // const result = await page.$eval('table[class="table2"]', (td) => {
    //   return td.innerHTML;
    // });

    console.log(result);

    await browser.close();
  },
}