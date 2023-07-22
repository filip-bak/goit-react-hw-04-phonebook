import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './ContactForm.module.css';

const ContactForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const handleSubmit = e => {
    e.preventDefault();

    onFormSubmit(formData.name, formData.number);

    setFormData({ name: '', number: '' });
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            pattern="[A-Z][a-z]+(([\`\s][A-Z][a-z]+)?){5}"
            title="Name may contain only letters, spaces. For example Adrian, Jacob Mercer, Charles De Batz De Castelmore"
            autoComplete="off"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <span className={styles.status}></span>
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles.input}
            type="tel"
            name="number"
            pattern="(\+[0-9]{2}\s)?[0-9]{3}[\s\-]?[0-9]{3}[\s\-]?[0-9]{3}"
            title="Phone number must be digits and can contain spaces, dashes and can start with +"
            autoComplete="off"
            placeholder="Number"
            required
            value={formData.number}
            onChange={handleChange}
          />
          <span className={styles.status}></span>
        </label>
        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func,
};

export default ContactForm;
