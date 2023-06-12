export function Header({ isOrderListOpen, setIsOrderListOpen }) {
  return (
    <div className="header">
      <div className="content">
        <img src="logo.png" alt="Logo" className="logo" />
        <div className="about">
          <span>Insta Food: Savory Delights Delivered in 15 Minutes!</span>
          <br />
          <br />
          Craving instant gratification for your taste buds? Look no further
          than Insta Food! We're your go-to delivery service for mouthwatering,
          delectable meals that arrive at your doorstep within a mere 15
          minutes. Indulge in a delightful culinary experience without the wait,
          as our team of skilled chefs craft and deliver a variety of
          irresistible dishes, right when you need them most. From sizzling
          pizzas to flavorful stir-fries, our extensive menu caters to every
          palate and guarantees a swift, satisfying dining experience. With
          Insta Food, relish the perfect fusion of speed and taste, all
          conveniently at your fingertips.
        </div>
      </div>
      {!isOrderListOpen && (
        <button className="btn" onClick={() => setIsOrderListOpen((c) => !c)}>
          Order Now 🍱
        </button>
      )}
    </div>
  );
}
