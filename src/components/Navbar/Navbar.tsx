import * as React from 'react';
import { useState } from 'react';
import styles from './Navbar.module.css';
import avatar from '../../assets/image-avatar.png';
import { getCurrencyLocale, navbarItems } from "../../utils";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import deleteIcon from '../../assets/icon-delete.svg';
import { CartProduct } from "../../models/cart-product.model";
import { removeProduct, toggleCartModal } from "../../feature/cart/cartSlice";
import Button from "../Button/Button";
import menuIcon from '../../assets/icon-menu.svg';
import { Cart, Close } from "../../assets/icons";

export function Navbar() {
    const cartProducts = useSelector((state: RootState) => state.cart.cartProducts)
    const [showCartPreview, setShowCartPreview] = useState<boolean>(false);
    const [showMobileNavbar, setShowMobileNavbar] = useState<boolean>(false);
    const dispatch = useDispatch();

    function getPriceLabel(product: CartProduct) {
        const productPrice = getCurrencyLocale(product.product.price.amount, product.product.price.currency);
        if (product.quantity > 1) {
            const total = product.product.price.amount * product.quantity;
            return (
                <div className={styles.price}>
                    <span className={styles.old_price}>{productPrice}</span>
                    <span className={styles.multiplier}>x{product.quantity}</span>
                    <span className={styles.new_price}>{getCurrencyLocale(total, product.product.price.currency)}</span>
                </div>
            )
        }

        return <span className={styles.new_price}>{productPrice}</span>
    }

    function deleteProduct(product: CartProduct) {
        console.log('passo')
        dispatch(removeProduct(product));
    }

    function openCartPreview() {
        setShowCartPreview(prevState => !prevState);
        dispatch(toggleCartModal());
    }

    return (
        <div className={styles.Navbar}>

            <div className={styles.logo}>
                <img src={menuIcon} alt="menu" onClick={() => setShowMobileNavbar(true)}/>
                <Link to={'/'}>sneakers</Link>
            </div>

            <div className={styles.items}>
                {navbarItems.map(item => (
                    <Link key={item.id} to={item.path}>{item.name}</Link>
                ))}
            </div>

            <div className={styles.cart_avatar}>
                <div className={styles.cart_container} onClick={() => openCartPreview()}>
                    {cartProducts.length > 0 && (
                        <div className={styles.product_number}>
                            {cartProducts.reduce((_, cartProduct) => cartProduct.quantity, 0)}
                        </div>
                    )}
                    <Cart color={'#69707D'}/>
                </div>
                <img className={styles.avatar} src={avatar} alt="avatar"/>
            </div>

            {showCartPreview && (
                <div className={styles.cart_preview}>
                    <div className={styles.cart_preview_title}>
                        Cart
                    </div>
                    {cartProducts.length === 0 && (
                        <div className={styles.empty_cart_preview}>
                            Your cart is empty
                        </div>
                    )}
                    {cartProducts.length > 0 && cartProducts.map(product => (
                        <div className={styles.product_preview} key={product.product.id}>
                            <img className={styles.product_preview_image} src={product.product.pictures[0].thumbnail}
                                 alt={product.product.productName}/>
                            <div className={styles.product_info}>
                                <div>{product.product.productName}</div>
                                <div>{getPriceLabel(product)}</div>
                            </div>
                            <img className={styles.delete} src={deleteIcon} alt="delete"
                                 onClick={() => deleteProduct(product)}/>
                        </div>
                    ))}
                    {cartProducts.length > 0 && (
                        <div className={styles.checkout}>
                            <Button text={'Checkout'} onClickHandler={console.log}/>
                        </div>
                    )}
                </div>
            )}

            {showMobileNavbar && (
                <div className={styles.mobile_navbar_container}>
                    <div className={styles.mobile_navbar}>
                        <span onClick={() => setShowMobileNavbar(false)}>
                            <Close color={'#69707D'}/>
                        </span>
                        <div className={styles.mobile_navbar_elements}>
                            {navbarItems.map(item => (
                                <Link key={item.id} to={item.path}>{item.name}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}