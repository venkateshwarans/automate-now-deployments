import { useEffect, useState } from "react";
import Head from "next/head";

import { siteDetails } from "../data/site-details";
import { fetchPosts, fetchImages } from "../helper/fetchData";
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
    async function getPosts() {
      const allPosts = await fetchPosts();
      setPosts([...allPosts]);
    }
    async function getImages() {
      const allImages = await fetchImages();
      setImages([...allImages]);
    }
    getImages();
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
      <img src={`${siteDetails[process.env.siteTitle].logo}`} alt="" />
      {/* {posts.length > 0
        ? posts.map((p) => <div key={p.fields.title}>{p.fields.title}</div>)
        : null} */}
<div>
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
