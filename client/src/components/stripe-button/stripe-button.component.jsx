import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JMXQlAgGWi8GwJIt7wTGrysOzkZURdeQu3HpU7hosq8nQqKqtzjBYdftWc1JIeZ5dfRKvh4GFEv0mHnnmDYUbd700iENUOYfM'

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Pembayaran berhasil!')
        }).catch(error => {
            console.log('Pembayaran error: ', JSON.parse(error));
            alert(
                'Terdapat kesalahan pada pembayaran anda. Silahkan untuk memastikan anda untuk menggunakan kartu kredit asal.'
            )
        })
    }
    return (
        <StripeCheckout
            label='Bayar sekarang'
            name='Saudagar ecommerce'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Jumlah Total Pembayaran Rp. ${price}.000`}
            // amount={priceForStripe}
            panelLabel='Bayar sekarang'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;