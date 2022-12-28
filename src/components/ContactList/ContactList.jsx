import PropTypes from 'prop-types';
import Item from 'components/Item/Item';
import { sort } from './../../helper';

export default function ContactList({ filter, contacts, deleteItemHandler }) {
  return (
    <ul>
      {filter
        ? contacts
            .filter(item => item.name.toLowerCase().includes(filter))
            .map(item => (
              <Item
                key={item.id}
                name={item.name}
                number={item.number}
                id={item.id}
                onClick={deleteItemHandler}
              />
            ))
        : sort(contacts).map(item => (
            <Item
              key={item.id}
              name={item.name}
              number={item.number}
              id={item.id}
              onClick={deleteItemHandler}
            />
          ))}
    </ul>
  );
}

ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired,
  deleteItemHandler: PropTypes.func.isRequired,
};
