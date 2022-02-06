import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import propTypes from 'prop-types';
import { useState } from 'react';
import shortid from 'shortid';


const Product = ({ title, basePrice, name,sizes, colors}) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  const getPrice = () => {
    const clickedSize = sizes.find(element => element.name === currentSize)
    return basePrice + clickedSize.additionalPrice;
  }
  

  const hundleSubmit = (e) => {
    e.preventDefault()
    console.log('Summary');
    console.log('================');
    console.log('Name:', title);
    console.log('Price:', getPrice());
    console.log('Size:', currentSize);
    console.log('Color:', currentColor);
  }
  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`}/>
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>{getPrice()}$</span>
          
        </header>
        <form onSubmit={hundleSubmit}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {/* <li><button type="button" className={styles.active}>S</button></li>
              <li><button type="button">M</button></li>
              <li><button type="button">L</button></li>
              <li><button type="button">XL</button></li>*/}
              {sizes.map(size => 
                <li key={shortid()}>
                  <button type="button" onClick={() => 
                    setCurrentSize(size.name)}
                    className={clsx(currentSize === size.name && styles.active)}>
                      {size.name}
                  </button>
                </li>
              )}
              
            
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {/* <li><button type="button" className={clsx(styles.colorBlack)} /></li>
              <li><button type="button" className={clsx(styles.colorRed)} /></li>
              <li><button type="button" className={clsx(styles.colorWhite, styles.active )} /></li>*/}
              {colors.map(color => 
                <li key={shortid()}>
                  <button type="button" onClick={() => 
                    setCurrentColor(color)} 
                    className={clsx(prepareColorClassName(color), currentColor === color && styles.active)}
                  />
                </li>
              )}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
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