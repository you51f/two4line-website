"use client"
import React, { useEffect, useState } from 'react'
import { useStateContext } from '../context/StateContext';
import styles from '../../app/page.module.css';
import { sendContactForm } from '../api/send';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

const OrderForm = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'A Client Message',
    message: ''
  });
  
  const [buttonDisabled, setButtonDisabled] = useState(false);
 
  
  

  



  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonDisabled(true);
    // Handle form submission here
    const data = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    };
    await sendContactForm(data);
    // Reset form fields
    setFormData({
        name: '',
        email: '',
        subject: 'A Client Message',
        message: ''
    });


  };
  return (
    <div>
      <div className={styles.order}>
      
        <div>
        <div className={styles.order_form}>
          <form onSubmit={handleSubmit}>
          <div>
              <label className={styles.contact_label} htmlFor="name">Name:</label>
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
              <label className={styles.contact_label} htmlFor="address">Email:</label>
              <input
                type="email"
                id="email"
                className={styles.order_input}
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            
            <div>
              <label className={styles.contact_label} htmlFor="message">Message:</label>
              <textarea
                id="message"
                className={styles.order_input}
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={{ height: '250px' }}
              />
            </div>
            
            <button type="submit" className={styles.order_send_btn} style={{ backgroundColor: buttonDisabled ? 'lightgrey' : '' }} disabled={buttonDisabled}> 
              Send Message
            </button>
          </form>
        </div> 
        </div>
      
    </div>
    </div>
  )
}

export default OrderForm