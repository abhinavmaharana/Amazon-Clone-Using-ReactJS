import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M31s/PriceReveal/D17052174_Samsung_M31s_Launch_DesktopTallHero_3000x1200-copy._CB408155746_.jpg"
        alt=""
      />

      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={1170.62}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id="49538094"
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
          price={23443.94}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="4903850"
          title="Fitbit Charge 3 Fitness Activity Tracker Special Edition"
          price={19618.36}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61RJmfJ%2Bc0L._SX679_.jpg"
        />
        <Product
          id="23445930"
          title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Black) "
          price={9710.11}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/7128HRanJgL._SX425_.jpg"
        />
        <Product
          id="3254354345"
          title="Apple iPad Pro (11-inch, Wi-Fi, 128GB) - Silver (2nd Generation) "
          price={58756.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/815a%2BXjrgvL._SX466_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="90829332"
          title="OnePlus 138.8 cm (55 inches) Q1 Series 4K Certified Android QLED TV 55Q1IN Pro (Black)"
          price={107408.55}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71D89swgrvL._SX355_.jpg"
        />
      </div>

      {/* Product */}
    </div>
  );
}

export default Home;
