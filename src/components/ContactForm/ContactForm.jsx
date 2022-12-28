import PropTypes from 'prop-types';

import { Input } from 'components/Filter/Filter.styled';
import { Label, AddIcon, MobileIcon, UserIcon } from './ContactForm.styled';
import { Button } from 'components/Wrapper/Wrapper.styled';
export default function ContactForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+((['
            -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only
            letters, apostrophe, dash and spaces. For example Adrian, Jacob
            Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Name"
        ></Input>
        <UserIcon />
      </Label>

      <Label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Number"
        ></Input>
        <MobileIcon />
      </Label>
      <Button type="submit">
        <AddIcon />
      </Button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
