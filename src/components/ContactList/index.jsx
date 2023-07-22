import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, filterQuery, onRemoveContact }) => {
  const handleRemoveContact = e => {
    const { id } = e.currentTarget.dataset;

    onRemoveContact(id);
  };

  return (
    <ul className={styles.list}>
      {contacts
        .filter(contact => {
          return filterQuery === ''
            ? contact
            : contact.name.toLowerCase().includes(filterQuery);
        })
        .map(({ id, name, number }) => {
          return (
            <li className={styles.item} key={id}>
              <span className={styles.name}>{name}:</span>&nbsp;
              <span className={styles['phone-number']}>{number}</span>
              <button
                className={styles.btn}
                data-id={id}
                onClick={handleRemoveContact}
              ></button>
            </li>
          );
        })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filterQuery: PropTypes.string,
  onRemoveContact: PropTypes.func,
};

export default ContactList;
