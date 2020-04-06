import client from '../core/contentful';

export async function fetchPosts() {
  const entries = await client.getEntries({
    content_type: "blogPost"
  })
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}



export async function fetchImages() {
  const entries = await client.getEntries({
    content_type: "images"
  })
  console.log(entries)
  if (entries.includes.Asset) return entries.includes.Asset
  console.log(`Error getting Entries for images.`)
}


