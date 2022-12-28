import styled from '@emotion/styled';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { HiOutlineDeviceMobile, HiOutlineUser } from 'react-icons/hi';

export const Label = styled.label`
  position: relative;
`;
export const AddIcon = styled(AiOutlineUserAdd)`
  width: 32px;
  height: 32px;
  color: #051747;
`;
export const MobileIcon = styled(HiOutlineDeviceMobile)`
  position: absolute;
  top: 4px;
  left: 8px;
  color: #535f80;
`;
export const UserIcon = styled(HiOutlineUser)`
  position: absolute;
  top: 4px;
  left: 8px;
  color: #535f80;
`;
