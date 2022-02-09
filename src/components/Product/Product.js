import styles from '../Product/Product.module.scss';
import propTypes from 'prop-types';
import { useState, useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';


const Product = ({ title, basePrice, name,sizes, colors}) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);


  const getPrice = useMemo(() => {
    const clickedSize = sizes.find(element => element.name === currentSize)
    return basePrice + clickedSize.additionalPrice;
  },[basePrice, sizes, currentSize]);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Summary');
    console.log('================');
    console.log('Name:', title);
    console.log('Price:', getPrice);
    console.log('Size:', currentSize);
    console.log('Color:', currentColor);
  }
  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <ProductImage title={title} name={name} currentColor={currentColor} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>{getPrice}$</span>
        </header>
        <ProductForm handleSubmit={handleSubmit} sizes={sizes} colors={colors} currentColor={currentColor} currentSize={currentSize} setCurrentColor={setCurrentColor} setCurrentSize={setCurrentSize}/>

        
      </div>
    </article>
  )
};
Product.propTypes = {
  name: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  colors: propTypes.array.isRequired,
  sizes: propTypes.array.isRequired,
  basePrice: propTypes.number.isRequired,
};
export default Product;