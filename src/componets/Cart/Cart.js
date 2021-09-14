import React, {useContext} from 'react'
import Modal from 'react-modal';
import {CartContext } from "../../contexts/CartContext/CartContext";
import CartItem from '../CartItem/CartItem';

const customStyles = {
    content: {
        top: '4%',
        left: 'auto',
        right: '1%',
        bottom: 'auto',
        // marginRight: '-50%',
        width: '35%',
        height: 'auto',
        // transform: 'translate(-50%, -50%)',
    },
    
  };

  

export default function Cart({setIsOpen, modalIsOpen}) {
    let subtitle,total = 0;
    const {cart, setCart} = useContext(CartContext)
    Modal.setAppElement('#root');
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
      
    }
    
    function closeModal() {
      setIsOpen(false);
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                // className ="w-full lg:w-1/3"
            >
            
            <h2 ref={(_subtitle) => (subtitle = _subtitle) } onClick={closeModal} className ="cursor-pointer" >X</h2>
            {/* {cart.length} */}

            <h2 className = 'text-center tracking-widest'>Cart Items</h2>

            {cart.map((item,idx) =>{
                total += (item.quantity * item.price);
                return <CartItem key = {idx} item = {item}/>
            })}

            

            <div className = 'flex justify-end mr-8'>Total Amount : {total.toFixed(2)}</div>
            <div className ='flex p-5'>
                   <div className = 'w-auto m-auto flex'>
                        <div className = 'border cursor-pointer p-1 border-black hover:bg-black hover:text-white'>Procceed To Pay </div>                   
                        <div className = 'ml-16 border p-1 cursor-pointer border-black hover:bg-black hover:text-white w-32 text-center' 
                        onClick = {e =>{
                          closeModal();
                          return setCart({type: 'CHECKOUT_CART',action:[]})}}
                        >Check Out</div>
                   </div> 
               </div>
            
            </Modal>
      </div>
    )
}
