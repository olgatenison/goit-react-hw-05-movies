import PropTypes from 'prop-types';
import {
  Form,
  FormBtn,
  SearchIcon,
  FormInput,
} from "./Searchbar.styled"

import { FaSearch } from 'react-icons/fa';

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(event.target.query.value);
    event.target.reset();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
          name="query"
        />
        <FormBtn type="submit" >
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
        </FormBtn>
      </Form>
    </div>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;