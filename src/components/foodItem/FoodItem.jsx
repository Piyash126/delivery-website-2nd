import { useContext, useState } from "react";
import addGreenIcon from "../../assets/frontend_assets/add_icon_green.png";
import addIcon from "../../assets/frontend_assets/add_icon_white.png";
import ratingStarts from "../../assets/frontend_assets/rating_starts.png";
import removeIcon from "../../assets/frontend_assets/remove_icon_red.png";
import { StoreContext } from "../../context/StoreContext";
import "./FoodItem.css";

const FoodItem = ({ item }) => {
  const { id, name, price, description, image } = item;
  console.log(id);

  const [itemCount, setItemCount] = useState(0);
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-img" src={image} alt="" />
        {!itemCount ? (
          <img
            src={addIcon}
            className="add"
            // onClick={() => setItemCount((prev) => prev + 1)}
            onClick={() => addToCart(id)}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => setItemCount((prev) => prev - 1)}
              src={removeIcon}
              alt=""
            />
            <p>{itemCount}</p>
            <img
              src={addGreenIcon}
              alt=""
              onClick={() => setItemCount((prev) => prev + 1)}
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={ratingStarts} alt="" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
