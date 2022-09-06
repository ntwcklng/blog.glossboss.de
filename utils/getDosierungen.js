export default async function getPosts() {
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  });
  const posts = await client
    .getEntries({
      content_type: "produkte",
      limit: 1000
    })
    .then(res => {
      return res.items;
    });

  posts.map(entry => {
    delete entry.sys;
    delete entry.metadata;
  });
  posts.sort((a, b) => {
    const nameA = a.fields.title?.toUpperCase(); // ignore upper and lowercase
    const nameB = b.fields.title?.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
  return posts;
}
