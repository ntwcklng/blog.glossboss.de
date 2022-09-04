import { cx } from "@utils/all";
export const generateDefaultThumb = cat => {
  switch (cat) {
    case "News":
      return "https://glossbossuploader.s3.eu-central-1.amazonaws.com/3YJRRswTU_Imf-Sxmtli--news/news.jpg";
    case "Podcast":
      return "https://glossbossuploader.s3.eu-central-1.amazonaws.com/thumbnails/pUHUJ_GqKuuq52AUzxTyd-podcast/defauktpodcast.jpg";
    default:
      break;
  }
};
export const reloadPosts = 25;
export function generateSlug(cat, slug) {
  return `/${cat.toLowerCase()}/${slug}`;
}

export function getThumbnail(url) {}
