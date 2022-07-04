import React , {useState} from 'react'
import './MyCart.css'
import { NavLink } from 'react-router-dom'
import FooterComponent from '../../components/FooterComponent/FooterComponent'
import Nav from '../../components/Nav/Nav'
import { Container } from '../../global.style'
import {Image} from "./../../global.style";
import { IoMdReturnLeft } from "react-icons/io";
import { MdClose } from "react-icons/md";
import {ReturnBackeButton,MyCartContainer,ItemCartRightSide,ItemCartLeftSide,ItemCart,ItemCartImage,
  ItemCartTitle,ItemQuant,ItemQuantButton,ItemcartPrice,CheckoutButton,GoToPayment} from './MyCart.style'

export default function MyCart() {
  const [count,setCount]=useState(1);

  const handleIncrement=()=>{
    setCount(count+1);}
    const handleDecrement=()=>{
      setCount(count-1);}
  return (
    <Container>
        <Nav/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Container>
          <MyCartContainer>
            <div>
            <IoMdReturnLeft className='IoMdReturnLeft'/>
            <ReturnBackeButton>Return to the product details</ReturnBackeButton>
            </div>
            
            <ItemCart>
              <ItemCartLeftSide>
                    <ItemCartImage>
                    <Image className='visa' src="./images/image-removebg-preview (7).png" width="100px" height="150px"></Image>
                    </ItemCartImage>
                    <div>
                      <ItemCartTitle>Laptop Bag</ItemCartTitle>
                    </div>
                    <ItemQuant>
                        <ItemQuantButton onClick={handleIncrement}>+</ItemQuantButton>
                        <input type='text' value={count} className='qntinput'/>
                        <ItemQuantButton onClick={handleDecrement}>-</ItemQuantButton>
                    </ItemQuant>
              </ItemCartLeftSide>

              <ItemCartRightSide>
                <ItemcartPrice>$75</ItemcartPrice>
                <MdClose className='MdClose'/>
              </ItemCartRightSide>
            </ItemCart>
            <GoToPayment>
            <CheckoutButton><NavLink to='/Payment' className='GoBack'>Go To Payment</NavLink></CheckoutButton>
            </GoToPayment>
          </MyCartContainer>
        </Container>
        <FooterComponent/>
        
    </Container>
  )
}
