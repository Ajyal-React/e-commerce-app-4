import Nav from "../../components/Nav/Nav";
import React from 'react'
import {
    Button,Label,Select,Hyper1,SmallText,SpanTage,Image,
    Color, ColorFaild,
    ContainerProduct, ContainerColor, FirstColor,ColorsOptions,
    FormDiv,
    ImagesDiv,
    MainImage,
    OtherImages, SecondColor, SelectFaild,
    Title,
    TitleAndDetails,
    FormProduct
} from './Product.style'
import {Container} from "../../global.style";


function Product () {

    return (
        <Container>
        <Nav />
        <ContainerProduct>

                <ImagesDiv>
                    <MainImage src="https://via.placeholder.com/300x200/"></MainImage>
                    <OtherImages>
                        <Image src="https://via.placeholder.com/300x200/"></Image>
                        <Image src="https://via.placeholder.com/300x200/"></Image>
                        <Image src="https://via.placeholder.com/300x200/"></Image>
                    </OtherImages>
                </ImagesDiv>
                <FormDiv>
                    <TitleAndDetails>
                        <Title>
                            <Hyper1>MacBook Pro 13</Hyper1>
                            <SmallText>The best for your professional life</SmallText>
                        </Title>
                        <SmallText>Availability in stock <SpanTage> Available</SpanTage></SmallText>
                    </TitleAndDetails>
                    <hr/>
                    <FormProduct>
                        <ColorFaild>
                            <Label>Choose your combination</Label>

                            <ColorsOptions>
                                <Color>
                                    <ContainerColor>
                                        <FirstColor color="#2C3639"></FirstColor>
                                        <SecondColor color="#DCD7C9"></SecondColor>
                                    </ContainerColor>
                                    <input type="radio" name=""/>
                                </Color>
                                <Color>
                                    <ContainerColor>
                                        <FirstColor color="#2C3639"></FirstColor>
                                        <SecondColor color="#DCD7C9"></SecondColor>
                                    </ContainerColor>
                                    <input type="radio" name=""/>
                                </Color>
                                <Color>
                                    <ContainerColor>
                                        <FirstColor color="#2C3639"></FirstColor>
                                        <SecondColor color="#DCD7C9"></SecondColor>
                                    </ContainerColor>
                                    <input type="radio" name=""/>
                                </Color>
                                </ColorsOptions>
                        </ColorFaild>
                        <SelectFaild>
                            <Label>Size and Weight</Label>
                            <Select>
                                <option></option>
                                <option></option>
                                <option></option>
                                <option></option>
                            </Select>
                        </SelectFaild>
                        <SelectFaild>
                            <Label>Chip</Label>
                            <Select>
                                <option></option>
                                <option></option>
                                <option></option>
                                <option></option>
                            </Select>
                        </SelectFaild>
                        <SelectFaild>
                            <Label>Storage</Label>
                            <Select>
                                <option></option>
                                <option></option>
                                <option></option>
                                <option></option>
                            </Select>
                        </SelectFaild>
                        <SelectFaild>
                            <Label>Memory</Label>
                            <Select>
                                <option></option>
                                <option></option>
                                <option></option>
                                <option></option>
                            </Select>
                        </SelectFaild>
                        <Button type="submit">Add To Cart</Button>
                    </FormProduct>
                </FormDiv>
        </ContainerProduct>
        </Container>
    )

}

export default Product