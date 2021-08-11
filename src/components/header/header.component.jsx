import React from 'react';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';

import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/seller.svg';
import { HeaderContainer, LogoContainer, OptionsContainer,  OptionLink } from './header.styles';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer >
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        Belanja
      </OptionLink>
      <OptionLink to='/shop'>
        Hubungi
      </OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={() => auth.signOut()}>
          Keluar
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>
          Masuk
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    { hidden ? null : <CartDropdown /> }
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
