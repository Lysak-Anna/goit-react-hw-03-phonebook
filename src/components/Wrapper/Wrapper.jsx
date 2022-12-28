import { Div } from './Wrapper.styled';
import PropTypes from 'prop-types';
export default function Wrapper({ children }) {
  return <Div>{children}</Div>;
}

Wrapper.propTypes = {
  children: PropTypes.array,
};
