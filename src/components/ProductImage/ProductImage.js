import styles from '../Product/Product.module.scss';
import PropTypes from 'prop-types';
const ProductImage = ({ title, name, currentColor }) => {

    return (
        <img 
            className={styles.image}
            alt={title}
            src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`}/>
    );
};

ProductImage.propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
    currentColor: PropTypes.string
  };

export default ProductImage;