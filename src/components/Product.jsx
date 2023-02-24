import React from "react";
import c from './Product.module.css';

import itOne from './img/item1.png';
import itTwo from './img/item2.png';
import star from './img/star.svg'


const Product = () => {
    return (
        <div className={c.products}>

            <div className={c.product}>
                <img src={itOne} alt="" width= '262px' height='248px' />

                <div className={c.text}>
                    <h1>Always in style!</h1>
                    <p className={c.info}>The standard chunk of Lorem Ipsum below <br /> 
                    for those interested. The standard chunk <br /> 
                    of for those interested.</p>
                    <p className={c.price}>$ 249.99 / <s>$ 249.99</s></p>
                    <ul>
                        <li className={c.item}><img src={star} alt="" width="13" height="12"/></li>
                        <li className={c.item}><img src={star} alt="" width="13" height="12"/></li>
                        <li className={c.item}><img src={star} alt="" width="13" height="12"/></li>
                        <li className={c.item}><img src={star} alt="" width="13" height="12"/></li>
                        <li className={c.item}><img src={star} alt="" width="13" height="12"/></li>
                    </ul>
                </div>
            </div>

            <div className={c.product}>
                <img src={itTwo} alt="" width= '262px' height='248px'/>

                <div className={c.text}>
                    <h1>Always in style!</h1>
                    <p className={c.info}>The standard chunk of Lorem Ipsum below <br /> 
                    for those interested. The standard chunk <br /> 
                    of for those interested.</p>
                    <p className={c.price}>$ 249.99 / <s>$ 249.99</s></p>
                    <ul>
                        <li className={c.item}><img src={star} alt="" width="13" height="12"/></li>
                        <li className={c.item}><img src={star} alt="" width="13" height="12"/></li>
                        <li className={c.item}><img src={star} alt="" width="13" height="12"/></li>
                        <li className={c.item}><img src={star} alt="" width="13" height="12"/></li>
                        <li className={c.item}><img src={star} alt="" width="13" height="12"/></li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Product;