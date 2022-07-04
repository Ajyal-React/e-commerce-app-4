import React from 'react'
import './Payment.css'
import FooterComponent from '../../components/FooterComponent/FooterComponent'
import Nav from '../../components/Nav/Nav'
import { Container } from '../../global.style'
import { IoMdReturnLeft } from "react-icons/io";
import { PaymentContainer, ReturnBackeButton,PaymentType ,PaymentMethod,PaymentInput,PaymentPageContent,Samarry,SamarryContent,
  PaymentPageButton,GoBackButton,CheckoutButton} from './Payment.style'

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
                    <PaymentType><PaymentInput type="radio" name="" id=""/>Credit Card</PaymentType>
                    <PaymentType><PaymentInput type="radio" name="" id=""/> Paypal</PaymentType>
                  </PaymentMethod>
                  </div>
                  <div>
                    <label for="ccnum">Credit card number</label>
                    <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
                    <label for="expmonth">Exp Month</label>
                    <input type="text" id="expmonth" name="expmonth" placeholder="September"/>
                    <div class="row">
                      <div class="col-50">
                        <label for="expyear">Exp Year</label>
                        <input type="text" id="expyear" name="expyear" placeholder="2018"/>
                      </div>
                      <div class="col-50">
                        <label for="cvv">CVV</label>
                        <input type="text" id="cvv" name="cvv" placeholder="352"/>
                      </div>
                    </div>
                    <label for="cname">Name on Card</label>
                    <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>

                  </div>
            </div>
            <Samarry>
                <h5>Samarry</h5>
                <SamarryContent>
                  <p>Order Total</p>
                  <span>$2,370</span>
                </SamarryContent>
                <SamarryContent>
                  <p>Order Total</p>
                  <span>$2,370</span>
                </SamarryContent>
                <SamarryContent>
                  <p>Order Total</p>
                  <span>$2,370</span>
                </SamarryContent>
                <hr/>
                <SamarryContent>
                  <p>SubTotal</p>
                  <span>$2,370</span>
                </SamarryContent>
            </Samarry>
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
