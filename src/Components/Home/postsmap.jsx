import React, { useState, useEffect } from "react";
import axios from "axios";

function PostsMap() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
      setLoading(false);
    };
    loadPosts();
  }, []);

  return (
    <div>
      <input
        className="searchInputHomeStyle"
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />

      <div className="container-flui">
        <div className="row seachCardsStyle">
          {loading ? (
            <h4>Loading ...</h4>
          ) : (
            posts
              .filter((value) => {
                if (searchTitle === "") {
                  return value;
                } else if (
                  value.title.toLowerCase().includes(searchTitle.toLowerCase()),
                  value.body.toLowerCase().includes(searchTitle.toLowerCase())

                ) {
                  return value;
                }
              })
              .map((item) => (
                <div className="col-md-4">
                  <div className="card homeCardStyle" key={item.id}>
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5> {/*manzil*/}
                      <p className="card-text">Locatsiya{item.body}</p>{" "}
                      <div className="form-outline">
                        <textarea
                          className="cardZIndexHome w-100"
                          readOnly
                          id="textAreaExample"
                          rows="4"
                        >
                          Assalomu Alaykum qadrdon! Siz bu sahifa orqali
                          o'zingiz orzu qilgan uy-joylarni sotib olishingiz yoki
                          shinam xonadonlarni ijarag olishingiz mumkin. Agar
                          Sizga yordam bera olgan bolsak juda ham hursandmiz(:
                        </textarea>
                      </div>{" "}
                      {/*Uy haqida malumot*/}
                      <p>Ismingizni yozing</p> {/*Ism kiriting*/}
                      <p>Telefon raqam</p> {/*Telefon raqam*/}
                      <p>Email yoki trlagram</p> {/*email or tg */}
                      <p>Ijara narxi</p> {/*Ijara narxi*/}
                    </div>
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
}

export default PostsMap;
