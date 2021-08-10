import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCartTotal } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';


const CheckoutPage = ({ cartItems, total    }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Produk</span>
            </div>
            <div className='header-block'>
                <span>Deskripsi</span>
            </div>
            <div className='header-block'>
                <span>Jumlah</span>
            </div>
            <div className='header-block'>
                <span>Harga</span>
            </div>
            <div className='header-block'>
                <span>Hapus</span>
            </div>
        </div>
        {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className='total'>
            <span>Total Rp. {total}.000,-</span>
        </div>
        <div className='test-warning'>
            *Silahkan ikuti petunjuk penggunaan tes kartu kredit untuk pembayaran*
            <br />
            4242 4242 4242 4242 - Exp: 01/25 - CVV: 123
        </div>
        <StripeCheckoutButton price={total}/>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);