import shortid from 'shortid';
import types from './phonebook-types';

const addContact = (name, number) => ({
  type: types.ADD,
  payload: {
    name,
    number,
    id: shortid.generate(),
  },
});

export default { addContact };
