import Nav from "../../components/Nav/Nav";
import React from "react";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import {
    Container,
    Content,
    Header,
    Image,
    ImageProfile,
    ItemSide,
    Order,
    OrderImage,
    Orders,
    SideBar,
    Icon, LogoutButton, Price, ImageO, Text
} from "./Profile.style"
import {Logout} from "../../Redux/user/user.actions";
import {Item} from "../../components/TrendingProducts/TrendingProducts.style";


function Profile () {

    return (
        <Container>
            <Nav />
            <SideBar>
                <ItemSide>
                    My Orders
                </ItemSide>
                <ItemSide>
                    Wishlist
                </ItemSide>
                <ItemSide>
                    Notification
                </ItemSide>
                <ItemSide>
                   Setting
                </ItemSide>

            </SideBar>
            <Header>
                <ImageProfile>
                    <Image src="https://via.placeholder.com/150"></Image>
                </ImageProfile>
                <article>
                    <Item>
                        <Icon></Icon>
                        <h2>UserName</h2>
                        <p>test test </p>
                    </Item>
                    <Item>
                        <Icon></Icon>
                        <h2>UserName</h2>
                        <p>test test </p>
                    </Item>
                    <Item>
                        <Icon></Icon>
                        <h2>Address</h2>
                        <p>test test </p>
                    </Item>
                    <Item>
                        <Icon></Icon>
                        <h2>Title</h2>
                        <p>test test </p>
                    </Item>
                    <Item>
                        <Icon></Icon>
                        <h2>Call Phone</h2>
                        <p>test test </p>
                    </Item>
                </article>
            </Header>

            <Content>
                <Orders>
                        <Order>
                            <OrderImage>
                                <ImageO src="https://via.placeholder.com/150"></ImageO>
                            </OrderImage>
                            <Text>
                                Laptop Page
                            </Text>
                            <Price>
                                $75
                            </Price>
                        </Order>
                        <Order>
                            <OrderImage>
                                <ImageO src="https://via.placeholder.com/150"></ImageO>
                            </OrderImage>
                            <Text>
                                Laptop Page
                            </Text>
                            <Price>
                                $75
                            </Price>
                        </Order>
                        <Order>
                            <OrderImage>
                                <ImageO src="https://via.placeholder.com/150"></ImageO>
                            </OrderImage>
                            <Text>
                                Laptop Page
                            </Text>
                            <Price>
                                $75
                            </Price>
                        </Order>
                        <Order>
                            <OrderImage>
                                <ImageO src="https://via.placeholder.com/150"></ImageO>
                            </OrderImage>
                            <Text>
                                Laptop Page
                            </Text>
                            <Price>
                                $75
                            </Price>
                        </Order>
                        <Order>
                            <OrderImage>
                                <ImageO src="https://via.placeholder.com/150"></ImageO>
                            </OrderImage>
                            <Text>
                                Laptop Page
                            </Text>
                            <Price>
                                $75
                            </Price>
                        </Order>
                        <Order>
                            <OrderImage>
                                <ImageO src="https://via.placeholder.com/150"></ImageO>
                            </OrderImage>
                            <Text>
                                Laptop Page
                            </Text>
                            <Price>
                                $75
                            </Price>
                        </Order>
                </Orders>
            </Content>
            <FooterComponent/>
        </Container>
    )
}

export default Profile;