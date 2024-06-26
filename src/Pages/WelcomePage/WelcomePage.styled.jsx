import styled from 'styled-components';

export const WrapperWelcomePg = styled.div`
  @media screen and (max-width: 767px) {
    /* padding-bottom: 40px; */
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding-bottom: 50px;
  }

  @media only screen and (min-width: 1440px) {
    margin-top: 80px !important;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 0 auto;
  }
`;
