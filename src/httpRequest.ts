import axios from "axios";
import fs from "fs";

export async function getRequest(url: string) {
  const response = await axios.get<cheerio.TagElement>(url);
  return response.data
}

export function saveHtmlOnDisk(html: cheerio.TagElement) {
  fs.writeFileSync("./test.html", html);
}
