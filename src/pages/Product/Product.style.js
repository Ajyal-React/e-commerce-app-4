import styled from "styled-components";

export const ContainerProduct = styled.div `
  @media (min-width: 960px) {
    width: 100vw;
    display: flex;
    height: 100vh;
    min-height: 100%;
    justify-content: start;
    align-items: center;
    gap: 10%;
    padding-left: 10% ;
  }
  @media (max-width: 968px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    
  }
  //padding:15% 0 10% 0;
  
`

export const ImagesDiv = styled.div `
  display: flex;
  @media(min-width: 960px) {
    width: 40%;
  }
  @media(max-width: 960px) {
    width: 100%;
  }
  flex-direction: column;
  gap: 20px;

`

export const MainImage = styled.img `
width: 100%;
  border: #111111 solid 1px;
  
  

`

export const OtherImages = styled.div `
  width: 100%;
display: flex;
  max-width: 100%;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  
  

`

export const Image = styled.img `
    display: inline;
  width: 20%;
  
`



export const FormDiv = styled.div `
    
    display: flex;
  flex-direction: column;
  width: 30%;
  justify-content: center;
  min-height: 100%;
  padding-top: 10%;
  
`

export const TitleAndDetails = styled.div `
width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom:10px ;

`

export const Title = styled.div `
width: 100%;
  margin-bottom:5px ;
`

export const FormProduct = styled.form `
width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 10px;
  min-height: 100%;
  margin-top: 20px;
  
`

export const ColorsOptions = styled.div `

  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  justify-content: space-between;
`

export const ColorFaild = styled.div `
    
    width: 100%;
  display: flex;
  flex-direction: column;
`
export const Color = styled.div `
    display: flex;
  flex-direction: column;
  width: 20%;

`


export const ContainerColor = styled.div `
display: flex;
  width: 100%;
  height: 8vh;
  min-height: 20%;
  margin-bottom: 10px;

`

export const FirstColor = styled.div `
    
    background: ${props => props.color};
  width: 50%;
`

export const SecondColor = styled.div `
  background: ${props => props.color};
  width: 50%;

`

export const SelectFaild = styled.div `
    height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const  Label = styled.label `
display: block;
  
`
export const Select = styled.select `
  height: 53%;
  background: #e8e7e7;
  border: none;
  border-radius: 5px;
  padding: 5px;
`

export const Button = styled.button `
  width: 100%;
    color: #ffff;
  background: #efa15c;
  height: 40px;
  border: none;
  margin-bottom: 20px;
`
export const Hyper1 = styled.h1 `
    font-size: 35px;
  margin: 0;
`

export const SmallText = styled.small `
  font-size: 14px;
  color: #a9a7a7;
`
export const SpanTage = styled.small `
  font-size: 15px;
  color: #02be02;
  font-weight: bold;
  margin-top: 10vh;
`




