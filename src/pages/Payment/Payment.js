import React from 'react'
import './Payment.css'
import FooterComponent from '../../components/FooterComponent/FooterComponent'
import '../../components/Icon.css'
import Nav from '../../components/Nav/Nav'
import { Container } from '../../global.style'
import { IoMdReturnLeft } from "react-icons/io";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import {Image} from "./../../global.style";
import { PaymentContainer, ReturnBackeButton,PaymentType ,PaymentMethod,PaymentInput,PaymentPageContent,Samarry,SamarryContent,
  PaymentPageButton,GoBackButton,CheckoutButton,PaymentMethodDiv} from './Payment.style'

export default function Payment() {
  return (
    <Container>
        <Nav/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Container>
        <PaymentContainer>
          <div>
          <IoMdReturnLeft className='IoMdReturnLeft'/>
          <ReturnBackeButton>Return to my Cart</ReturnBackeButton>

          </div>
          <PaymentPageContent>
            <div>
              <div className="PaymentMethod">
                  <h3>Choose your payment method</h3>
                  <PaymentMethod>
                    <PaymentMethodDiv className='PaymentMethodDivActive'>
                     <PaymentType><PaymentInput type="radio" name="" id=""/>Credit Card</PaymentType>
                     <div>
                      <Image className='visa' src="./images/visa.jpg" width="40px" height="30px"></Image>
                      <Image className='visa' src="./images/masterCard.png" width="40px" height="30px"></Image>
                     </div>
                    </PaymentMethodDiv>

                    <PaymentMethodDiv>
                    <PaymentType><PaymentInput type="radio" name="" id=""/> Paypal</PaymentType>
                    <div>
                      <Image className='visa' src="./images/paypal.png" width="100px" height="30px"></Image>
                     </div>
                    </PaymentMethodDiv>
                  </PaymentMethod>
                  </div>
                  <div>
                    <label for="ccnum">Credit card number</label>
                    <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" className='inputCreditInfo'/>
                    <div class="row">
                      <div class="col-50">
                        <label for="expyear">Exp Date</label>
                        <input type="text" id="expyear" name="expyear" placeholder="MM/YY"  className='inputCreditInfo'/>
                      </div>
                      <div class="col-50">
                        <label for="cvv">CVV</label>
                        <input type="text" id="cvv" name="cvv" placeholder="352"  className='inputCreditInfo'/>
                      </div>
                    </div>
                    <label for="cname">Name on Card</label>
                    <input type="text" id="cname" name="cardname" placeholder="John More Doe"  className='inputCreditInfo'/>

                  </div>
            </div>
            <div>
            <Samarry>
                <h5>Samarry</h5>
                <SamarryContent>
                  <p>Order Total</p>
                  <span>$2,378.00</span>
                </SamarryContent>
                <SamarryContent>
                  <p>Promo Code</p>
                  <span>SALE22</span>
                </SamarryContent>
                <SamarryContent>
                  <p>Shipping</p>
                  <span>$219.00</span>
                </SamarryContent>
                <hr/>
                <SamarryContent>
                  <h6>SubTotal</h6>
                  <span className='green'>Total: $12</span>
                </SamarryContent>
            </Samarry>
            </div>
          </PaymentPageContent>
          <br/>
          <hr/>
          <br/>
          <PaymentPageButton>
            <GoBackButton>Go Back</GoBackButton>
            <CheckoutButton>Checkout</CheckoutButton>
          </PaymentPageButton>

          </PaymentContainer>
        <FooterComponent/>
        
        </Container>
        
    </Container>
  )
}
