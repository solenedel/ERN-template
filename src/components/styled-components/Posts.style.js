/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Posts } from '../Posts';
import { colorVars } from './css-variables';

export const StyledFavsPage = styled(FavsPage)`
  & img {
    width: 100px;
  }
`;
