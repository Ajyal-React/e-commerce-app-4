import React from 'react'
import {Image} from "./../../global.style";
import { Container } from '../../global.style'
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import '../../components/Icon.css'
import { AboutUs, AboutUsPara, Contact, Footer, FooterContent, Minu, MinuList, MinuListLink,FootedNail,CopyRight,ContactIcons } from './FooterComponent.style'

export default function FooterComponent() {
  return (
    <div>
        <Footer>
                <FooterContent>
                    <AboutUs>
                        <Image height="50px" width="200px" src="./images/Group 14849.png"></Image>
                        <AboutUsPara>
                            Lorem ipsum dolor sit amet , consectetur adipiscing elit , 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            . Ut enim ad minim veniam ,quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </AboutUsPara>
                    </AboutUs>

                    <Minu>
                        <ul><h6>Home</h6>
                            <MinuList><MinuListLink href='#'>Featured Categori</MinuListLink></MinuList>
                            <MinuList><MinuListLink href='#'>Featured Product</MinuListLink></MinuList>
                            <MinuList><MinuListLink href='#'>Other</MinuListLink></MinuList>
                        </ul>
                    </Minu>

                    <Minu>
                        <ul><h6>Menu</h6>
                            <MinuList><MinuListLink href='#'>Home</MinuListLink></MinuList>
                            <MinuList><MinuListLink href='#'>New arrival</MinuListLink></MinuList>
                            <MinuList><MinuListLink href='#'>Mobiles</MinuListLink></MinuList>
                        </ul>
                    </Minu>

                    <Minu>
                        <ul><h6>Menu</h6>
                            <MinuList><MinuListLink href='#'>Labtops</MinuListLink></MinuList>
                            <MinuList><MinuListLink href='#'>Headphones</MinuListLink></MinuList>
                            <MinuList><MinuListLink href='#'>Accessories</MinuListLink></MinuList>
                        </ul>
                    </Minu>

                    <Contact>
                        <h4>Contact</h4>
                        <AboutUsPara>Feil free get in touch with us via phone or send us a message .</AboutUsPara>
                        <MinuList><BsTelephoneFill className='BsTelephoneFill' /><MinuListLink href='#'>+1 234 567 8910</MinuListLink></MinuList>
                        <MinuList><MdEmail className='MdEmail' /><MinuListLink href='#'>support@khoomi.com</MinuListLink></MinuList>
                    </Contact>
                </FooterContent>
                <FootedNail>
                    <CopyRight>all copyRights are reserved @ 2022</CopyRight>
                    <ContactIcons>
                        <FaFacebookF className='FaFacebookF'/>
                        <RiWhatsappFill className='RiWhatsappFill'/>
                    </ContactIcons>
                </FootedNail>

                
            
        </Footer>
    </div>
  )
}
