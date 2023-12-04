"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
// import { sendContactForm } from '../api/send';
// // import { toast } from 'react-hot-toast';
// import getStripe from '../lib/getStripe';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);

    let foundProduct;
  let index; 

  const [formData, setFormData] = useState(() => {
    const storedData = typeof window !== 'undefined' ? localStorage.getItem('formData') : null;
    return storedData ? JSON.parse(storedData) : {
      recipientName: '',
    idNumber: '',
    specificAddress: '',
    countryRegion: '(US) United States',
    provinceState: '',
    city: '',
    postalCode: '',
    recipientMobile: '',
    recipientMailbox: '',
    subject: "New Order Details",
    email: '',
    privacyPolicyChecked: false,
    returnPolicyChecked: false,
    };
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('formData', JSON.stringify(formData));
    }
  }, [formData]);

  const [formValues, setFormValues] = useState({
    recipientName: '',
    idNumber: '',
    specificAddress: '',
    countryRegion: '(US) United States',
    provinceState: '',
    city: '',
    postalCode: '',
    recipientMobile: '',
    recipientMailbox: '',
    subject: "New Order Details",
    email: '',
    privacyPolicyChecked: false,
    returnPolicyChecked: false,
  });

  const toggleSideMenu = () => {
    setIsOpen(!isOpen);
  };


  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id && item.name === product.name);
  
    // setTotalPrice((prevTotalPrice) => (prevTotalPrice + product.price * quantity).toFixed(2));
    setTotalPrice((prevTotalPrice) => (parseFloat(prevTotalPrice) + product.price * quantity).toFixed(2));
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
  
    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id && cartProduct.name === product.name) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity
          };
        }
        return cartProduct; // Return unchanged items
      });
  
      setCartItems(updatedCartItems);
    } else {
      const updatedProduct = { ...product, quantity };
      setCartItems((prevCartItems) => [...prevCartItems, updatedProduct]);
    }
  };


  const onRemove = (product) => {
    const foundProductIndex = cartItems.findIndex((item) => item._id === product._id && item.name === product.name);
  
    if (foundProductIndex !== -1) {
      const foundProduct = cartItems[foundProductIndex];
      const newCartItems = cartItems.filter((item, index) => index !== foundProductIndex);
  
      // setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
      // setTotalPrice((prevTotalPrice) => (prevTotalPrice + product.price * quantity).toFixed(2));
      setTotalPrice((prevTotalPrice) => (parseFloat(prevTotalPrice) + foundProduct.price * foundProduct.quantity).toFixed(2));
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity);
      setCartItems(newCartItems);
    }
  };



  const toggleCartItemQuanitity = (id, name, value) => {
    const foundProductIndex = cartItems.findIndex((item) => item._id === id && item.name === name);
  
    if (foundProductIndex !== -1) {
      const foundProduct = cartItems[foundProductIndex];
      const newCartItems = [...cartItems];
  
      if (value === 'inc') {
        newCartItems[foundProductIndex] = { ...foundProduct, quantity: foundProduct.quantity + 1 };
        setCartItems(newCartItems);
        setTotalPrice((prevTotalPrice) => (parseFloat(prevTotalPrice) + foundProduct.price).toFixed(2));
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
      } else if (value === 'dec') {
        if (foundProduct.quantity > 1) {
          newCartItems[foundProductIndex] = { ...foundProduct, quantity: foundProduct.quantity - 1 };
          setCartItems(newCartItems);
          setTotalPrice((prevTotalPrice) => (parseFloat(prevTotalPrice) - foundProduct.price).toFixed(2));
          setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
        }
      }
    }
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  }

  const decQty = () => {
    setQty((prevQty) => {
      if(prevQty - 1 < 1) return 1;
     
      return prevQty - 1;
    });
  }

  const updateFormValue = (fieldName, value) => {
    setFormData((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      recipientName: '',
      idNumber: '',
      specificAddress: '',
      countryRegion: '',
      provinceState: '',
      city: '',
      postalCode: '',
      recipientMobile: '',
      recipientMailbox: '',
      subject: "New Order Details",
      email: '',
      privacyPolicyChecked: false,
      returnPolicyChecked: false,
    });
  };
 

  

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        setIsOpen,
        isOpen,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuanitity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
        formValues,
        updateFormValue,  
        resetForm,
        formData 
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);