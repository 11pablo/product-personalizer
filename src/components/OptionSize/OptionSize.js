import shortid from 'shortid';
import styles from '../Product/Product.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types'

const OptionSize = ({sizes, currentSize, setCurrentSize}) => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {sizes.map(size => <li key={shortid()}><button type="button" onClick={() => setCurrentSize(size.name)} className={clsx(currentSize === size.name && styles.active)}>{size.name}</button></li>)}
      </ul>
    </div>
  );
}

OptionSize.propTypes = {
    data: PropTypes.object,
    currentSize: PropTypes.string,
    setCurrentSize: PropTypes.func
  }
export default OptionSize;