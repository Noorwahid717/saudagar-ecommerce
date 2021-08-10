import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';

import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/seller.svg';
import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        Belanja
      </Link>
      <Link className='option' to='/shop'>
        Hubungi
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          Keluar
        </div>
      ) : (
        <Link className='option' to='/signin'>
          Masuk
        </Link>
      )}
      <CartIcon />
    </div>
    { hidden ? null : <CartDropdown /> }
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
