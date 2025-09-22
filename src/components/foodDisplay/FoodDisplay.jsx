import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../foodItem/FoodItem";
import "./FoodDisplay.css";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-dispaly" id="food-display">
      <h2>Top dishes near you </h2>
      <div className="food-disply-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return <FoodItem key={index} item={item} />;
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
