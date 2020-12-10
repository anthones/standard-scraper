import { getRequest, saveHtmlOnDisk } from "./httpRequest";

async function saveHtml(url: string) {
  const html = await getRequest(url);
  saveHtmlOnDisk(html);
}

// saveHtml("");
