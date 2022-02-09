import Button from '../Button/Button';
import styles from '../Product/Product.module.scss';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';

import PropTypes from 'prop-types';

const ProductForm = ({ handleSubmit, sizes, colors, currentColor, setCurrentColor, currentSize, setCurrentSize }) => {

  //console.log(setCurrentSize, sizes, currentSize);

  return (
    <form onSubmit={handleSubmit}>
      <OptionSize sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize}/>
      <OptionColor colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor}/> 
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
}

ProductForm.propTypes = {
    data: PropTypes.object,
    handleSubmit: PropTypes.func,
    currentColor: PropTypes.string,
    currentSize: PropTypes.string,
    setCurrentColor: PropTypes.func,
    setCurrentSize: PropTypes.func,
    prepareColorClassName: PropTypes.func
  };

export default ProductForm;