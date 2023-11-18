import { urlForImage } from '@/sanity/lib/image';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import styles from '../../../app/page.module.css';

const password = "imcqouyaykhjtttc";

export async function POST(request) {
  const body = await request.json();
  const newBody = JSON.stringify(body);
  
  // console.log(body);
  
  try {  
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "you51felbalaa@gmail.com",
        pass: password
      },
    });
    
    const cartItemsHTML = body.cartItems.map((item) => (
      `<div style="display: flex; gap: 15px; padding: 10px;" key=${item._id}>
        <img src=${urlForImage(item?.image[0])} style="width:100px;height: 90px; border-radius: 2px; background-color: #ebebeb; box-shadow: 0 3px 4px rgba(0, 0, 0, 0.3);" />
        <div style=" display: flex;justify-content: space-between;width: 100%; flex-direction: column;">
          <div style="display: flex;align-items: center;justify-content: flex-start;width: 100%;">
            <h5 style="font-size: 12px;">${item?.name}</h5>
          </div>
          <p style="display: flex;justify-content: flex-start;align-items: center;">Quantity: ${item?.quantity}</p>
          <p style="display: flex;justify-content: flex-start;align-items: center;">Size: ${item?.selectedSize}</p>
          <p>
            <div style="display: flex;justify-content: space-between;flex-direction: row;margin: 10px 0;align-items: center;">
              <h4 style="margin-left: 15px;">$${item?.price}</h4>
            </div>
          </div>
        </div>
      </div>`
    )).join('');

    await transporter.sendMail({ 
      from: "you51felbalaa@gmail.com",
      to: "you51felbalaa@gmail.com",
      subject: "An Order from Two4line website",
      text: "An Order from Two4line website",
      html: `<div style="font-family: Arial, sans-serif;">
      <h2 style="font-size: 24px; margin-bottom: 20px;">Order Details</h2>
      <div style="margin-bottom: 20px;">
        <h4 style="font-size: 18px; margin-bottom: 5px;">Name:</h4>
        <div style="font-size: 16px;">${body.name}</div>
      </div>
      <div style="margin-bottom: 20px;">
        <h4 style="font-size: 18px; margin-bottom: 5px;">Phone number:</h4>
        <div style="font-size: 16px;">${body.phoneNumber}</div>
      </div>
      <div style="margin-bottom: 20px;">
        <h4 style="font-size: 18px; margin-bottom: 5px;">Alternative number:</h4>
        <div style="font-size: 16px;">${body.alternativePhone}</div>
      </div>
      <div style="margin-bottom: 20px;">
        <h4 style="font-size: 18px; margin-bottom: 5px;">Address:</h4>
        <div style="font-size: 16px;">${body.address}</div>
      </div>
      <div style="margin-bottom: 20px;">
        <h4 style="font-size: 18px; margin-bottom: 5px;">Total price:</h4>
        <div style="font-size: 16px;">${body.totalPrice}</div>
        <div style="font-size: 16px;">Used Voucher ${body.voucher}</div>
        <div style="font-size: 16px;">New Total ${body.newPrice}</div>
      </div>
      <div style="margin-bottom: 20px;">
        <h4 style="font-size: 18px; margin-bottom: 5px;">Instructions:</h4>
        <div style="font-size: 16px;">${body.instructions}</div>
      </div>
      <h3 style="font-size: 20px; margin-bottom: 10px;">Order:</h3>
      ${cartItemsHTML}
    </div>
  `
    });


    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message });
  }
}