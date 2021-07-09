import React from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/phonebook/phonebook-actions';
import styles from './ContactList.module.css';

const ContactsList = ({ contactsData, onDeleteContact }) => (
  <ul className={styles.contsct__list}>
    {contactsData.map(({ name, number, id }) => (
      <li key={id} className={styles.contact__list_el}>
        <p className={styles.contact__list_text}>
          {name}: {number}
        </p>
        <button onClick={() => onDeleteContact(id)}>delete</button>
      </li>
    ))}
  </ul>
);

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const filterNormalize = filter.toLowerCase();
  const visibleContacts = items.filter(item =>
    item.name.toLowerCase().includes(filterNormalize),
  );
  return {
    contactsData: visibleContacts,
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
