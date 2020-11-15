import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue} from "./StateProvider";

function Payment() {

    const [{basket, user}, dispatch] = useStateValue()

    return (
        <div className='payment'>
            <div className='payment__container'></div>
                {/*Payment section - delivery adress */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Adress</h3>
                    </div>
                <div className='payment__adress'>
                    <p>{user?.email}</p>
                    <p>Aabysgate 14</p>
                    <p>Drammen, 3041</p>
                </div>
                </div>

                {/*Payment section - review items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                       ))}
                    </div>

                </div>

                {/*Payment section - payment method */}
                <div className='payment__section'>


                </div>
        </div>
    )
}

export default Payment
