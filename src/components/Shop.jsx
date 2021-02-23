import React, {useState,useEffect} from "react";
import "./shop.css";

const Shop = () => {
const [items, setItems] = useState([])

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get"
    );

    const newItems = await data.json();
    setItems(newItems.data)
  };

  useEffect(() => {
   fetchItems();
  }, [])
 
  return (
    <header className=" text-white">
      <div class="jumbotron text-dark">
        <h1 class="display-5 m-1">Welcome to the Shop!</h1>
      </div>
      <div className="container text-center ">
        <div className="row">
          {items.map((item) => {
            return (
              <div className="col-md-6 col-lg-4">
                <div className="card m-3">
                  <div
                    className="card-body shadow rounded card1"
                    style={{
                      backgroundImage: `url(${item.item.images.icon})${
                        item.item.rarity === "legendary"
                          ? ",radial-gradient(#d37841,#78371d)"
                          : item.item.rarity === "common"
                          ? ",radial-gradient(#8c8c8c,#2f2f2f)"
                          : item.item.rarity === "uncommon"
                          ? ",radial-gradient(#60aa3a,#175117)"
                          : item.item.rarity === "rare"
                          ? ",radial-gradient(#49acf2,#143977)"
                          : item.item.rarity === "epic"
                          ? ",radial-gradient(#b15be2,#4b2483)"
                          : ""
                      }`,
                      backgroundSize: "cover",
                      height: "400px",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </div>
                <h2>
                  <span
                    style={{
                      backgroundImage: `${
                        item.item.rarity === "legendary"
                          ? "radial-gradient(#d37841,#78371d)"
                          : item.item.rarity === "common"
                          ? "radial-gradient(#8c8c8c,#2f2f2f)"
                          : item.item.rarity === "uncommon"
                          ? "radial-gradient(#60aa3a,#175117)"
                          : item.item.rarity === "rare"
                          ? "radial-gradient(#49acf2,#143977)"
                          : item.item.rarity === "epic"
                          ? "radial-gradient(#b15be2,#4b2483)"
                          : ""
                      }`,
                    }}
                    class="badge badge-secondary"
                  >
                    {item.item.name}
                  </span>
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}

export default Shop




