const puppeteer = require('puppeteer');

module.exports = {
  GetEpisodeByName: async (name, season) => {
    const formattedName = name.includes(" ") ? name.replace(" ", "-").toLowerCase() : name.toLowerCase();

    const browser = await puppeteer.launch({
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
      ]
    });
    const page = await browser.newPage();
    await page.goto(`https://next-episode.net/${formattedName}/season-${season}`);

    const result = await page.$eval('table[cellpadding="3"]', (td) => {
      const episodes = [];

      const episode = td.querySelectorAll('td[itemprop="episodeNumber"]');
      const name = td.querySelectorAll('span[itemprop="name"]');
      const date = td.querySelectorAll('span[itemprop="datePublished"]');

      for (let i = 0; i < episode.length; i++) {
        episodes.push({
          name: name[i].textContent,
          episode: episode[i].textContent,
          datePublished: date[i].textContent,
        });
      }

      return episodes;
    });

    await browser.close();

    return result;
  }
}