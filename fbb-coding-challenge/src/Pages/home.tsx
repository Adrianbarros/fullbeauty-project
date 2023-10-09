import React, { useState, useEffect } from 'react';
import { Header } from '../Components/header';
import '../Styles/home.css'
import { Shopping } from './shopping';
import items from '../Data/items.json'
import { Steps } from '../Components/steps';
import { Billing } from './billing';
import { ShippingInfo, BillingInfo } from '../Types/types';
import { Shipping } from './shipping';
import { Review } from './review';
import { Cart } from '../Components/cart';
import { calcTotal } from '../Utils/helpers';


const Home = () => {
    const [page, setPage] = useState('shopping')
    const [cart, setCart] = useState<any>({})
    const [total, setTotal] = useState(0)
    const [shipData, setShipData] = useState<ShippingInfo>({
        name: '',
        address: '',
        email: '',
        phone: '',
    });
    const [billData, setBillData] = useState<BillingInfo>({
        name: '',
        cardNumber: '',
        address: ''
    })

    const addItem = (item: string) => {
        const newData = { ...cart }
        if (item in newData) {
            newData[item] += 1
        }
        else {
            newData[item] = 1
        }
        setCart(newData)
        setTotal(calcTotal(cart))
        console.log(total)
    }
    const handleShippingChange = (e: any) => {
        const { name, value } = e.target;
        setShipData({
            ...shipData,
            [name]: value,
        });
    }
    const handleBillingChange = (e: any) => {
        const { name, value } = e.target;
        setBillData({
            ...billData,
            [name]: value,
        });
    }

    const nextPage = (page: string) => {
        setPage(page)
    }

    useEffect(() => {
        const updatedTotal = calcTotal(cart);
        setTotal(updatedTotal);
        console.log(updatedTotal);
    }, [cart]);
    return (
        <div className='page'>
            <Header />
            <Steps />
            {
                page === 'shopping' &&
                <div className='row'>
                    <div className='shopping'>
                        <Shopping items={items.items} add={addItem} next={nextPage} />
                    </div>
                    <Cart data={cart} total={total} next={nextPage} page='shipping' />
                </div>
            }
            {
                page === 'shipping' &&
                <div className='shipping'>
                    <Shipping data={shipData} handleChange={handleShippingChange} next={nextPage} />
                </div>
            }
            {
                page === 'billing' &&
                <div className='billing'>
                    <Billing data={billData} handleChange={handleBillingChange} next={setPage} />
                </div>
            }
            {
                page === 'review' &&
                <div className='review'>
                    <Review shippingInfo={shipData} billingInfo={billData} cartData={cart} next={nextPage} />
                </div>
            }

        </div>
    );
}

export default Home;
