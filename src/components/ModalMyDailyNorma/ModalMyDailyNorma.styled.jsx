import styled from 'styled-components';

import { glow, pulse, theme } from 'styles/theme';

import { inputValidationStyler } from 'helpers/helpers';

export const ModalContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 12px;
  max-width: 280px;

  @media screen and (min-width: 768px) {
    min-width: 704px;
    padding: 32px 24px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 592px;
  }
`;

export const ModalTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalTitle = styled.h2`
  font-size: ${theme.fontSizes.subtitle};
  font-weight: ${theme.fontWeights.medium};
  line-height: ${theme.lineHeights.subtitle};
  color: ${theme.colors.primaryBlack};
`;

export const FormulasWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FormulasWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`;

export const FormulaText = styled.p`
  font-size: ${theme.fontSizes.listTitle};
  line-height: ${theme.lineHeights.info};
  color: ${theme.colors.primaryBlue};

  span {
    font-size: ${theme.fontSizes.text};
    line-height: ${theme.lineHeights.text};
    color: ${theme.colors.primaryBlack};
    margin-right: 4px;
  }
`;

export const FormulasDescription = styled.div`
  padding: 10px 9px;
  word-wrap: initial;
  border-radius: ${theme.radii.normal};
  border: solid 1px ${theme.colors.secondaryLightBlue};
  font-size: ${theme.fontSizes.info};
  line-height: ${theme.lineHeights.info};
  color: ${theme.colors.secondaryDarkGray};

  span {
    color: ${theme.colors.primaryBlue};
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormTitle = styled.h3`
  font-size: ${theme.fontSizes.listTitle};
  font-weight: ${theme.fontWeights.medium};
  line-height: ${theme.lineHeights.listTitle};
  color: ${theme.colors.primaryBlack};
`;

export const RadioFormWraper = styled.div`
  display: flex;
  gap: 24px;
`;

export const RadioWoman = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const RadioMan = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const InputField = styled.input`
  height: 14px;
  width: 14px;

  &:checked {
    fill: ${theme.colors.primaryBlue};
  }
`;

export const LabelWrap = styled.label`
  font-size: ${theme.fontSizes.text};
  line-height: ${theme.lineHeights.text};
  color: ${theme.colors.primaryBlack};
  word-wrap: initial;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputFormField = styled.input`
  max-width: 100%;
  height: 44px;
  padding: 12px 10px;
  font-size: ${theme.fontSizes.text};
  line-height: ${theme.lineHeights.text};
  color: ${theme.colors.primaryBlue};
  border-radius: ${theme.radii.small};
  border: solid 1px ${theme.colors.secondaryGrayBlue};
  outline: none;

  &::placeholder {
    color: ${theme.colors.secondaryBlue};
  }
  ${props => inputValidationStyler(props)};
`;

export const WaterPerDayWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const WaterPerDayText = styled.div`
  font-size: ${theme.fontSizes.text};
  line-height: ${theme.lineHeights.text};
  color: ${theme.colors.primaryBlack};
  word-wrap: initial;

  @media screen and (min-width: 768px) {
    min-width: 328px;
  }
`;

export const WaterPerDayValue = styled.div`
  font-size: ${theme.fontSizes.listTitle};
  font-weight: ${theme.fontWeights.bold};
  line-height: ${theme.lineHeights.info};
  color: ${theme.colors.primaryBlue};
  width: 57px;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    min-width: 42px;
  }
`;

export const AmountOfWaterLabel = styled.div`
  font-size: ${theme.fontSizes.listTitle};
  font-weight: ${theme.fontWeights.medium};
  line-height: ${theme.lineHeights.listTitle};
  color: ${theme.colors.primaryBlack};
  word-wrap: initial;
`;

export const ButtonSave = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 256px;
  /* height: 20px; */
  background-color: ${theme.colors.primaryBlue};
  padding: 8px 30px;
  border-radius: ${theme.radii.normal};
  border: none;
  font-size: ${theme.fontSizes.text};
  font-weight: ${theme.fontWeights.medium};
  line-height: ${theme.lineHeights.text};
  color: ${theme.colors.primaryWhite};

  @media screen and (min-width: 768px) {
    margin: 0 0 0 auto;
    width: 160px;
    height: 44px;
    padding: 10px 30px;
    font-size: ${theme.fontSizes.listTitle};
    line-height: ${theme.lineHeights.info};
  }

  &:hover {
    box-shadow: ${theme.shadows.hoverButton};
    animation: ${pulse} 0.8s infinite, ${glow} 1.5s infinite;
  }
`;
