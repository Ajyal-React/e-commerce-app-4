import React from 'react'
import './MyCart.css'
import FooterComponent from '../../components/FooterComponent/FooterComponent'
import Nav from '../../components/Nav/Nav'
import { Container } from '../../global.style'
import {ReturnBackeButton,MyCartContainer} from './MyCart.style'

export default function MyCart() {
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
            <ReturnBackeButton>Return to the product details</ReturnBackeButton>
            
           
          </MyCartContainer>
          <FooterComponent/>
        </Container>
        
    </Container>
  )
}
