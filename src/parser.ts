import cheerio from "cheerio";

export function parseAll(html: cheerio.TagElement) {
  const $ = cheerio.load(html);

  const title = $("#productTitle").text().trim();

  let price = $("#priceblock_saleprice").text().trim();

  if (price === "") {
    price = $("#priceblock_ourprice").text().trim();
  }

  const productLinks = $("a")
    .map((_, element) => $(element).attr("href"))
    .get()
    .filter((link: string) => link.startsWith("/dp/"));

  return { title, price, productLinks };
}