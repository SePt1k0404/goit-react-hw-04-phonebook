import styled from 'styled-components';

export const ContactsList = styled.ul`
  margin: 0;
  margin-top: 20px;
  margin-left: 20px;
  padding: 20px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 580px;
  border: 2px solid #000;
  border-radius: 20px;
  background-color: #ff83e8;
`;

export const ContactsListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border: 2px solid #334ac9;
  border-radius: 20px;
  padding: 2px 7px;
`;
