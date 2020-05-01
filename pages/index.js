import { useEffect, useState } from "react";
import Head from "next/head";
import _ from 'lodash';
import {WarehouseHeader} from "../components/WarehouseHeader"
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
  const wareHouse = posts && posts.items && _.first(posts.items);
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
    <div>{
      wareHouse ?
      <>
      <Head>
        <title>{wareHouse.fields.title}</title>

        <link
          rel="stylesheet"
          href="https://css.zeit.sh/v1.css"
          type="text/css"
        />
      </Head>
      <div>
        <div className="posts">
          <div>
            <WarehouseHeader sourceImage={wareHouse.fields.postImage.fields.file.url}
              destinationImage={'looker.jpg'}>
            </WarehouseHeader>
            <h1>{wareHouse.fields.title}</h1>
            <div>{getRenderedHTML(wareHouse.fields.content)}</div>
          </div>
        </div>
        <div style={contentArea}>
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
      </> : null
      }
    </div>
  );
}

export default HomePage;
