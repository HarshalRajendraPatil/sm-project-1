import { Food } from "./Food";

export function FoodList({
  setIsOrderListOpen,
  setIsAddingNewItem,
  isAddingNewItem,
  foodItemList,
}) {
  return (
    <>
      <div className="food-list">
        {foodItemList.map((food) => (
          <Food food={food} key={crypto.randomUUID()} />
        ))}
        <button className="btn" onClick={() => setIsOrderListOpen((c) => !c)}>
          Close
        </button>
        {!isAddingNewItem && (
          <button
            className="btn"
            onClick={() => setIsAddingNewItem((adding) => !adding)}
          >
            Add Item
          </button>
        )}
      </div>
    </>
  );
}
