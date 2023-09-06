import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 580px;
  padding: 20px;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
  border: 2px solid #000;
  border-radius: 20px;
  background-color: #eddf9d;
`;

export const FormSubmitBtn = styled.button`
  width: 120px;
  margin-left: auto;
  border: none;
  border-radius: 20px;
  background-color: #00c410;
`;

export const FormInputName = styled.input`
  margin-left: 30px;
`;

export const FormInputNumber = styled.input`
  margin-left: 15px;
`;
