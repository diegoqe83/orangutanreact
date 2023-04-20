import logo from "../../assets/shopping-cart_icon-icons.com_72552.png";

export const CartWidget = () => {
  return (
    <div>
      <img src={logo} alt="Logo carrito" />
      <span> 0</span>
    </div>
  );
};
