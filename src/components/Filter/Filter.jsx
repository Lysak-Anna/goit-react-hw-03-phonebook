import PropTypes from 'prop-types';
import { Input, Div, SearchIcon } from './Filter.styled';

export default function Filter({ onChange }) {
  return (
    <Div>
      <SearchIcon />
      <Input
        placeholder="Search by name"
        type="text"
        onChange={onChange}
      ></Input>
    </Div>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
