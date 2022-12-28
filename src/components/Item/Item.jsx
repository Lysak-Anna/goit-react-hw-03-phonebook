import PropTypes from 'prop-types';
import { Element, Image, Name, Number, Button, Icon } from './Item.styled';
export default function Item({ name, number, onClick, id }) {
  return (
    <Element>
      <Image>{name.slice(0, 1)}</Image>
      <div>
        <Name>{name}</Name>
        <Number> {number}</Number>
      </div>
      <Button type="button" onClick={onClick} id={id}>
        <Icon />
      </Button>
    </Element>
  );
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
