import { memo } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { HeaderContainer } from './styles';

function HeaderComponent() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="Logo Github Blog" />
      </Link>
    </HeaderContainer>
  );
}

export const Header = memo(HeaderComponent);
