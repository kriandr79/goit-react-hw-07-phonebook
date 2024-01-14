import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { getIsLoading, getError } from '../redux/contactsSlice';
import Form from './Form/Form';
import ContactList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  // Завантаження списку контактів
  useEffect(() => {
    console.log('useeffect');
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Form></Form>
      {isLoading && !error && (
        <div>
          <b>Contacts are loading...</b>
        </div>
      )}
      <Filter />
      <ContactList />
    </div>
  );
}
