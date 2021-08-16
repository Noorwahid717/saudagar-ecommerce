import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCartTotal } from '../../redux/cart/cart.selectors';

import {
    CheckoutHeaderContainer,
    CheckoutPageContainer,
    HeaderBlockContainer,
    TotalContainer,
    WarningContainer
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total    }) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>Produk</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Deskripsi</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Jumlah</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Harga</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Hapus</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <TotalContainer>
            <span>Total Rp. {total}.000,-</span>
        </TotalContainer>
        <WarningContainer>
            *Silahkan ikuti petunjuk penggunaan tes kartu kredit untuk pembayaran*
            <br />
            4242 4242 4242 4242 - Exp: 01/25 - CVV: 123
        </WarningContainer>
        <StripeCheckoutButton price={total}/>
    </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);