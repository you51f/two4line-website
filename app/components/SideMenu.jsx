"use client"
import React, { useEffect, useRef } from 'react'
import { useStateContext } from '../context/StateContext';
import styles from '../page.module.css'

const SideMenu = () => {
    const menuRef = useRef();
    const { isOpen , setIsOpen } = useStateContext();

    useEffect(() => {
        if (menuRef.current) {
          menuRef.current.style.width = '100%';
          menuRef.current.style.transition = 'transform 1s ease-in-out';
        }else {
            menuRef.current.style.width = '0';
        }
      }, [menuRef]);

  return (
    <div className={styles.side_menu} ref={menuRef}>
        <button onClick={() => {setIsOpen(false)}}>back</button>
    </div>
  )
}

export default SideMenu