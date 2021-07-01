import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import axios from "axios";
export default function Container({ count, setCount }) {
  const URL = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const result = await axios.get(URL);
    setProducts(result.data);
  });

  return (
    <div className="row">
      {/* <div class="col-sm">
          <Cart
            title="iPhone 11"
            description="A new dual-camera system captures more of what you see and love. The fastest chip ever in a smartphone and all-day battery life let you do more and charge less. And the highest-quality video in a smartphone, so your memories look better than ever."
            setCount={setCount}
          />
        </div>
        <div class="col-sm">
             count={count}
         <Cart
            title="Fossil Analog gold Women Watch BQ3181"
            description="Stay fashionable with Fossil Analog gold Women Watch BQ3181 Quartz watch from Fossil available on Amazon. This analog watch has Round Rose Gold dial with a diameter of 34.0 millimeter. The Rose Gold colored straps in the watch are made of Stainless Steel . This watch has 2 year warranty."
            count={count}
            setCount={setCount}
          />
        </div>
        <div class="col-sm">
          <Cart
            title="LG Ultragear Gaming Monitor"
            description="LG UltraGear gaming monitor with 144Hz Refresh Rate and 1ms Native Response Time, Height Adjustable Stand"
            count={count}
            setCount={setCount}
          />
        </div> */}

      {products.map((product) => {
        return (
          <div className="col-sm-3">
            <Cart
              ket={product.id}
              product={product}
              count={count}
              setCount={setCount}
            />
          </div>
        );
      })}
    </div>
  );
}
