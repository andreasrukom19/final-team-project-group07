import { useTranslation } from 'react-i18next';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { selectIsLoggedIn, selectUserData } from '../../redux/selectors';

import { LanguageSelector, PopupUser } from 'components';
import { Logo } from 'components/Icons/Logo';
import { UserIcon } from 'components/Icons/UserIcon';

import {
  UserLanguagesWrapper,
  HeaderContainer,
  UserLogoContainer,
  UserInfo,
  UserAvatar,
  UserNameText,
  SignInText,
} from './Header.styled';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userData = useSelector(selectUserData);
  const userEmail = userData?.email ?? 'Sign in';
  const userEmailSplit = userEmail.split('@')[0];
  const userName = userData?.userName;
  const userAvatar = userData?.avatarURL;
  const { t } = useTranslation();
  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <Logo />
        </Link>
        <UserLanguagesWrapper>
          <UserInfo>
            <Link to="/signin">
              <UserLogoContainer>
                {isLoggedIn ? (
                  userName ? (
                    <div>
                      <UserNameText>{userName}</UserNameText>
                    </div>
                  ) : (
                    <div>{userEmailSplit}</div>
                  )
                ) : (
                  <SignInText>{t('authForm.signinTitle')}</SignInText>
                )}
                {isLoggedIn && userAvatar ? (
                  <UserAvatar src={userAvatar} alt="userPhoto" />
                ) : (
                  <UserIcon />
                )}
              </UserLogoContainer>
            </Link>
            {isLoggedIn && <PopupUser />}
          </UserInfo>

          {!isLoggedIn && <LanguageSelector />}
        </UserLanguagesWrapper>
      </HeaderContainer>
    </>
  );
};
