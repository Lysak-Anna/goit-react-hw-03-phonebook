import styled from '@emotion/styled';
import { AiOutlineUserDelete } from 'react-icons/ai';
export const Element = styled.li`
  display: flex;
`;
export const Image = styled.span`
  background-color: #e7e9f0;
  color: #051747;
  font-size: 24px;
  font-weight: 500;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Name = styled.p`
  color: #051747;
  font-size: 18px;
  font-weight: 500;
  margin-top: 4px;
`;
export const Number = styled.p`
  color: #535f80;
  text-align: left;
  font-size: 14px;
`;

export const Button = styled.button`
  cursor: pointer;
  margin-left: auto;
  border: none;
  background-color: transparent;
`;
export const Icon = styled(AiOutlineUserDelete)`
  height: 20px;
  width: 20px;
  color: #e9322e;
`;
