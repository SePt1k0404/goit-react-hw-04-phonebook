import { InputFilterWrapper, InputFilter } from './ContactsFilter.styled';

export const ContactsFilter = ({ filter, handlerChange }) => {
  return (
    <>
      <InputFilterWrapper>
        <label>
          Find contacts by name
          <InputFilter
            type="text"
            name="filter"
            value={filter}
            onChange={handlerChange}
          />
        </label>
      </InputFilterWrapper>
    </>
  );
};
