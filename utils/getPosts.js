export default async function getPosts(category = "", author = "") {
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  });
  const posts = await client
    .getEntries({
      content_type: "post",
      "fields.category": category,
      "fields.author": author,
      limit: 1000,
      order: "-fields.date"
    })
    .then(res => {
      return res.items;
    });

  posts.map(entry => {
    delete entry.fields.body;
    delete entry.sys;
    delete entry.metadata;
  });
  return posts;
}
