import styled from 'styled-components';
import { theme } from 'styles/theme';

export const PopupButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 16px;
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  &:first-child {
    margin-bottom: 16px;
  }
`;

export const ButtonText = styled.p`
  margin-left: 8px;

  color: ${theme.colors.primaryBlue};
  font-size: ${theme.fontSizes.text};
  font-weight: ${theme.fontWeights.regular};
`;

export const ButtonContent = styled.div`
  display: flex;
  align-items: row;
  align-items: center;
`;