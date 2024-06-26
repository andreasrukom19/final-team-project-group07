import styled from 'styled-components';
const bgSignin1x = require('../../img/background/mobile/bg_signin@1x.png');
const bgSignin2x = require('../../img/background/mobile/bg_signin@2x.png');
const bgSigninDes1x = require('../../img/background/desktop/bg_signin@1x.png');
const bgSigninDes2x = require('../../img/background/desktop/bg_signin@2x.png');

export const ContainerSignin = styled.div`
  display: flex;
  width: 320px;
  margin: 24px auto 0;
  padding: 0px 20px 40px;
  position: relative;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    width: 768px;
    margin: 40px auto 0;
    padding: 0px 32px 44px;
  }

  @media screen and (min-width: 1440px) {
    display: block;
    width: 1440px;
    margin: 20px auto 0;
    padding: 0px 112px 56px;
  }
`;

export const SignInStyle = styled.div`
  height: -webkit-fill-available;
  position: relative;
  background-position: center;
  background-repeat: no-repeat, no-repeat;
  background-size: contain;

  @media screen and (max-width: 767px) {
    background-image: url(${bgSignin1x});
  }

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
    background-image: url(${bgSignin2x});
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    background-image: url(${bgSignin1x});
    picture {
      position: absolute;
      top: -50px;
      right: 40px;
    }
  }
  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
    background-image: url(${bgSignin2x});
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${bgSigninDes1x});

    picture {
      position: absolute;
      top: -30px;
      left: -70px;
    }
  }

  @media only screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
    background-image: url(${bgSigninDes2x});
  }
`;
