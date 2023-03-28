import styles from './App.module.css'
import ProductView from "./components/Product/ProductView";
import { product } from "./utils";
import { useSelector } from "react-redux";
import { RootState } from "./store";

function App() {
    const cartModalIsOpen = useSelector((state: RootState) => state.cart.cartModalIsOpen)
  return (
    <div className={`${styles.App} ${cartModalIsOpen ? styles.no_scroll : ''}`}>
        <ProductView product={product} />
    </div>
  )
}

export default App
