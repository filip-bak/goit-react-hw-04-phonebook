import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ onFilterChange }) => {
  const handleChange = e => {
    const filterValue = e.target.value;
    onFilterChange(filterValue);
  };

  return (
    <div>
      <label className={styles.label}>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          name="filter"
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func,
};

export default Filter;
