import { useEffect, useState } from "react";
import Head from "next/head";
import _ from 'lodash';

import { siteDetails } from "../data/site-details";
import { fetchPosts, fetchImages, getRenderedHTML } from "../helper/fetchData";
const gridCell = {
  color: "white",
  padding: "30px",
};
const tableStyle = {
  width: "100%",
  marginBottom: "1.5em",
};
const contentArea = {
  width: "100%",
  maxWidth: "700px",
  margin: "0 auto 3em",
};

const gridlogo = {
  verticalAlign: "middle",
  maxHeight: "80px",
  maxWidth: "180px"
}

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);
  useEffect(() => {
    async function getImages() {
      const allImages = await fetchImages();
      setImages([...allImages]);
    }
    getImages();
  }, []);

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchPosts();
      setPosts({ items: allPosts.items, includes: allPosts.includes });
    }
    getPosts();
  }, []);

  return (
    <div style={contentArea}>
      <Head>
        <title>{siteDetails[process.env.siteTitle].title}</title>

        <link
          rel="stylesheet"
          href="https://css.zeit.sh/v1.css"
          type="text/css"
        />
      </Head>
      {/* {siteDetails[process.env.siteTitle]["title"]} */}
      <div>
        <div className="posts">
          {posts.items && posts.items.length > 0
            ? posts.items.map(p => {
              console.log(p)
              const renderedHtml = getRenderedHTML(p.fields.content);
              return (
                <div>
                  {console.log(posts.includes)}
                  <img src={`${siteDetails[process.env.siteTitle].logo}`} alt="" />
                  <img src={`${p.fields.postImage.fields.file.url}`} alt="" />
                  <h1>{p.fields.title}</h1>
                  <div>{renderedHtml}</div>
                </div>
              )
            })
            : null}
        </div>
        <table style={tableStyle}>
          <tbody>
            <tr>
              {images.length > 0
                ? images.map((p) => (

                  <td key={p.fields.title} style={gridCell}>
                    <a href="#">
                      <img
                        style={gridlogo}
                        src={p.fields.file.url}
                        alt={p.fields.title}
                      />
                    </a>
                  </td>
                ))
                : null}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HomePage;
