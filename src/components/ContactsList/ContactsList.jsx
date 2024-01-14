import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/filterSlice';
import { deleteContact } from '../../redux/operations';

function ContactList() {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);
  const contactsList = useSelector(getContacts);

  // Видалення контакту
  const removeContact = contactId => dispatch(deleteContact(contactId));

  // Отримання відфільтрованих контактів
  const normalazedFilter = filterValue.toLowerCase();
  const filteredContacts = contactsList.filter(contact =>
    contact.name.toLowerCase().includes(normalazedFilter)
  );

  return (
    <>
     
      <ul>
        {filteredContacts.map(({ name, phone, id }) => (
          <li key={id}>
            {name}: {phone}{' '}
            <button type="button" onClick={() => removeContact(id)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ContactList;
