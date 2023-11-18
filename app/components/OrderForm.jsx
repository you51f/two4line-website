"use client"
import React, { useEffect, useState } from 'react'
import { useStateContext } from '../context/StateContext';
import styles from '../../app/page.module.css';
import { sendContactForm } from '../api/send';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

const OrderForm = ({fetchedVouchers}) => {
  const router = useRouter()
    const { totalPrice, cartItems, setShowCart } = useStateContext();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    alternativePhone: '',
    instructions: '',
    policyChecked: false
  });
  const [newTotal, setNewTotal] = useState(totalPrice);
  const [voucher, setVoucher] = useState('');
  const [selectedVoucher, setSelectedVoucher] = useState('');
  const [vouchers, setVouchers] = useState(fetchedVouchers);
  const [invalidVoucher, setInvalidVoucher] = useState(false);
 
  
  

  const setNewTotalPrice = () => {
    const matchedVoucher = vouchers.find((v) => v.name === voucher);
    if (matchedVoucher) {
        setSelectedVoucher(matchedVoucher.name)
      const discount = matchedVoucher.discount / 100; // Convert discount percentage to decimal
      const discountedPrice = totalPrice - totalPrice * discount;
      setNewTotal(discountedPrice);
      setInvalidVoucher(false);
    } else {
        setSelectedVoucher('')
      setNewTotal(totalPrice);
      setInvalidVoucher(true);
    }
  };


  useEffect(() => {
    setShowCart(false)
  }, [setShowCart])


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    const data = {
      cartItems: cartItems,
      totalPrice: totalPrice,
      voucher: selectedVoucher,
      newPrice: newTotal,
      name: formData.name,
      address: formData.address,
      phoneNumber: formData.phoneNumber,
      alternativePhone: formData.alternativePhone,
      instructions: formData.instructions,
    };
    await sendContactForm(data);
    // Reset form fields
    setFormData({
      name: '',
      address: '',
      phoneNumber: '',
      alternativePhone: '',
      instructions: '',
      policyChecked: false
    });

    router.push('/success');

  };
  return (
    <div>
      <div className={styles.order}>
      <div className={styles.order_header}>
        <div className={styles.order_header_logo}></div>
      </div>
      {cartItems.length >= 1 && (
        <div>
          <div className={styles.order_title}>Complete Your Order</div>
        <div className={styles.order_form}>
          <form onSubmit={handleSubmit}>
          <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                className={styles.order_input}
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                className={styles.order_input}
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="text"
                id="phoneNumber"
                className={styles.order_input}
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="alternativePhone">Alternative Phone Number:</label>
              <input
                type="text"
                id="alternativePhone"
                className={styles.order_input}
                name="alternativePhone"
                value={formData.alternativePhone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="instructions">Special Instructions:</label>
              <textarea
                id="instructions"
                className={styles.order_input}
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                style={{ height: '250px' }}
              />
            </div>
            <div className={styles.order_policy}>
              <label className={styles.input_checkbox}>
                  <input type="checkbox" id="policyChecked" name="policyChecked" checked={formData.policyChecked} onChange={handleChange} required />
                  <div>
                      I have read and agree to the <Link className={styles.policy_link} href={"/exchange-refund-policy"}>Exchange & Refund policy</Link>.
                  </div>
              </label>
            </div>
            <div>
              <label htmlFor="voucher">Voucher:</label>
              <div className={styles.voucher}>
                <input
                  type="text"
                  id="voucher"
                  className={styles.order_input}
                  name="voucher"
                  value={voucher}
                  onChange={(e) => setVoucher(e.target.value)}
                />
                <div onClick={setNewTotalPrice} className={styles.voucher_btn}>
                  Apply
                </div>
              </div>
              {invalidVoucher && (
                <div className={styles.invalid_voucher}>
                  Invalid Voucher. Please enter a valid voucher code.
                </div>
              )}
            </div>
            <div>
              <label htmlFor="totalPrice">Total: ${newTotal} EGP</label>
            </div>
            <button type="submit" className={styles.order_send_btn}>
              Order
            </button>
          </form>
        </div> 
        </div>
      )}
      {cartItems.length < 1 && (
          <div className={styles.empty_cart}>
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <div
                onClick={() => setShowCart(false)}
                className={styles.resume_shop_btn}
              >
                Continue Shopping
              </div>
            </Link>
          </div>
        )}
    </div>
    </div>
  )
}

export default OrderForm