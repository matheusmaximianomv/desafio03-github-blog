import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="Logo Github Blog" />
      </Link>
    </HeaderContainer>
  );
}
