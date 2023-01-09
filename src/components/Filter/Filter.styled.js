import styled from '@emotion/styled';
import { CiSearch } from 'react-icons/ci';
export const Input = styled.input`
  margin-bottom: 10px;
  background-color: #e7e9f0;
  border-radius: 12px;
  border: 1px solid #535f80;
  width: 100%;
  height: 32px;
  padding-left: 32px;
  ::placeholder {
    color: #535f80;
  }
  &:hover,
  &:focus {
    border: 1px solid #535f80;
    outline: none;
  }
`;
export const Div = styled.div`
  position: relative;
  margin-bottom: 20px;
`;
export const SearchIcon = styled(CiSearch)`
  position: absolute;
  top: 8px;
  left: 8px;
  color: #535f80;
`;
