import styled from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyle';
import { theme } from 'styles/theme';

export const MyDailyNormaContainer = styled.div`
  width: 166px;
  max-height: 74px;
  border: 1px solid #ecf2ff;
  border-radius: 10px;
  box-shadow: ${theme.shadows.normaFrame};
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    margin-top: -24px;
    max-height: 76px;
  }

  @media (min-width: 1440px) {
    width: 166px;
    max-height: 76px;
    margin-top: 32px;
  }
`;

export const MyDailyNorma = styled.h2`
  font-weight: 500;
  font-size: ${theme.fontSizes.listTitle};
  line-height: ${theme.lineHeights.info};
  color: ${theme.colors.primaryBlack};
  margin: 0;
  text-align: center;
  padding: 8px 20px 12px 20px;
`;

export const MyDailyNormaAmount = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  padding-left: 20px;
  padding-bottom: 8px;
`;

export const WaterNormaAmount = styled.h2`
  font-weight: ${theme.fontWeights.bold};
  font-size: 24px;
  line-height: ${theme.lineHeights.info};
  color: ${theme.colors.primaryBlue};
  margin: 0;
`;

export const WaterNormaAmountEdit = styled.button`
  ${GlobalStyle}
  font-weight: ${theme.fontWeights.regular};
  font-size: ${theme.fontSizes.text};
  line-height: ${theme.lineHeights.text};
  border: none;
  background: none;
  color: #8baeff;
  padding: 0;

  &:hover {
    cursor: pointer;
  }
`;

export const BottleImage = styled.img`
  ${GlobalStyle}
  margin-top: 8px;
`;