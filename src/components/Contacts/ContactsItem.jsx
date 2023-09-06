import { ContactsListBtn, ContactsListInfo } from './ContactsItem.styled';

export const ContactsItem = ({ name, number, deleteContact }) => {
  return (
    <>
      <ContactsListInfo>
        {name} {number}
      </ContactsListInfo>
      <ContactsListBtn value={name} type="button" onClick={deleteContact}>
        Delete
      </ContactsListBtn>
    </>
  );
};
