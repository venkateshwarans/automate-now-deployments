import client from '../core/contentful';
import * as contentful from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import _ from 'lodash';


export async function fetchPosts() {
  const entries = await client.getEntries({
    content_type: "post",
    'fields.tag.sys.id': '6mZQPJodbURKfgSo4v9QiB'
    // 'fields.tag.fields.tagName[match]': 'adroll'


  })
  if (entries) return entries
  console.log(`Error getting Entries for ${contentType.name}.`)
}



export async function fetchImages() {
  const entries = await client.getEntries({
    content_type: "images"
  })
  if (entries.includes.Asset) return entries.includes.Asset
  console.log(`Error getting Entries for images.`)
}


export function getRenderedHTML (doc) {
  return documentToReactComponents(doc)
}
