import * as React from 'react';
import { Product } from "../../models/product.model";
import styles from './ProductView.module.css';
import { useState } from "react";
import { getCurrencyLocale } from "../../utils";
import Button from "../Button/Button";
import cartIcon from '../../assets/icon-cart.svg';
import iconPlus from '../../assets/icon-plus.svg';
import iconMinus from '../../assets/icon-minus.svg';
import { Next, Previous } from "../../assets/icons";
import { useDispatch } from "react-redux";
import { CartProduct } from "../../models/cart-product.model";
import { addProduct } from "../../feature/cart/cartSlice";

type Props = {
    product: Product;
};

export default function ProductView(props: Props) {
    const [selectedImageId, setSelectedImageId] = useState<number>(props.product.pictures[0].id);
    const [previewSelectedImageId, setPreviewSelectedImageId] = useState<number>(props.product.pictures[0].id);
    const [productCounter, setProductCounter] = useState<number>(0);
    const [showPreview, setShowPreview] = useState<boolean>(false);
    const dispatch = useDispatch();

    function editCounter(operation: 'inc' | 'dec') {
        if (operation === 'inc') {
            setProductCounter(prevState => prevState + 1)
        } else {
            setProductCounter(prevState => prevState === 0 ? 0 : prevState - 1);
        }
    }

    function nextImage(context: 'mobile' | 'desktop') {
        const actualImageIndex = props.product.pictures.findIndex(image => image.id === ( context === 'mobile' ? selectedImageId : previewSelectedImageId ));
        if (actualImageIndex >= 0) {
            if (actualImageIndex === props.product.pictures.length - 1) {
                context === 'mobile'
                    ? setSelectedImageId(props.product.pictures[0].id)
                    : setPreviewSelectedImageId(props.product.pictures[0].id);
            } else {
                context === 'mobile'
                    ? setSelectedImageId(props.product.pictures[actualImageIndex + 1].id)
                    : setPreviewSelectedImageId(props.product.pictures[actualImageIndex + 1].id);
            }
        }
    }

    function previousImage(context: 'mobile' | 'desktop') {
        const actualImageIndex = props.product.pictures.findIndex(image => image.id === ( context === 'mobile' ? selectedImageId : previewSelectedImageId ));
        if (actualImageIndex >= 0) {
            if (actualImageIndex === 0) {
                context === 'mobile'
                    ? setSelectedImageId(props.product.pictures[props.product.pictures.length - 1].id)
                    : setPreviewSelectedImageId(props.product.pictures[props.product.pictures.length - 1].id);
            } else {
                context === 'mobile'
                    ? setSelectedImageId(props.product.pictures[actualImageIndex - 1].id)
                    : setPreviewSelectedImageId(props.product.pictures[actualImageIndex - 1].id);
            }
        }
    }

    function addProductToCart() {
        console.log(productCounter)
        if (productCounter === 0) {
            return;
        }

        const productToAdd: CartProduct = {
            product: props.product,
            quantity: productCounter
        };

        dispatch(addProduct(productToAdd));
    }

    return (
        <div className={styles.container}>
            <div className={styles.images}>
                <div className={styles.images_carousel}>
                    <div className={styles.previous} onClick={() => previousImage('mobile')}>
                        <Previous color={'black'}/>
                    </div>
                    <div>
                        <img className={styles.principal}
                             src={`src/assets/${props.product.pictures.find(picture => picture.id === selectedImageId)?.image}`}
                             alt="image"
                             onClick={() => {
                                 setShowPreview(prevState => !prevState);
                                 setPreviewSelectedImageId(selectedImageId);
                             }}/>
                    </div>
                    <div className={styles.next} onClick={() => nextImage('mobile')}>
                        <Next color={'black'}/>
                    </div>
                </div>
                <div className={styles.thumbnails}>
                    {props.product.pictures.map(picture => (
                        <img
                            key={picture.id}
                            className={selectedImageId === picture.id ? styles.selected : ''}
                            src={`src/assets/${picture.thumbnail}`}
                            alt={picture.thumbnail}
                            onClick={() => setSelectedImageId(picture.id)}/>
                    ))}
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.title}>
                    {props.product.title}
                </div>
                <div className={styles.productName}>
                    {props.product.productName}
                </div>
                <div className={styles.description}>
                    {props.product.description}
                </div>
                <div className={styles.price_container}>
                    <div className={styles.actual_price_container}>
                        <div className={styles.actual_price}>
                            {getCurrencyLocale(props.product.price.amount, props.product.price.currency)}
                        </div>
                        <div className={styles.discount}>
                            {props.product.percentageDiscount}%
                        </div>
                    </div>
                    <div className={styles.original_price}>
                        {getCurrencyLocale(props.product.price.amount * ( 100 / props.product.percentageDiscount ), props.product.price.currency)}
                    </div>
                </div>
                <div className={styles.actions}>
                    <div className={styles.counter}>
                        <div className={styles.minus} onClick={() => editCounter('dec')}>
                            <img src={iconMinus} alt="minus"/>
                        </div>
                        <div className={styles.product_counter}>{productCounter}</div>
                        <div className={styles.plus} onClick={() => editCounter('inc')}>
                            <img src={iconPlus} alt="plus"/>
                        </div>
                    </div>
                    <Button text={'Add to cart'} icon={cartIcon} onClickHandler={() => addProductToCart()}/>
                </div>
            </div>
            {showPreview && (
                <div className={styles.modal}>
                    <div className={styles.modal_container}>
                        <div className={styles.modal_header}>
                            <div className={styles.close} onClick={() => setShowPreview(false)}>
                                <span>X</span>
                            </div>
                        </div>
                        <div className={styles.modal_content}>
                            <div className={styles.principal_container}>
                                <div className={styles.previous} onClick={() => previousImage('desktop')}>
                                    <Previous color={'black'}/>
                                </div>
                                <img width={'60%'}
                                     src={`src/assets/${props.product.pictures.find(picture => picture.id === previewSelectedImageId)?.image}`}
                                     alt="image"/>
                                <div className={styles.next} onClick={() => nextImage('desktop')}>
                                    <Next color={'black'}/>
                                </div>
                            </div>
                            <div className={styles.preview_thumbnails}>
                                {props.product.pictures.map(picture => (
                                    <img
                                        width={'10%'}
                                        key={picture.id}
                                        className={previewSelectedImageId === picture.id ? styles.selected : ''}
                                        src={`src/assets/${picture.thumbnail}`}
                                        alt={picture.thumbnail}
                                        onClick={() => setPreviewSelectedImageId(picture.id)}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}