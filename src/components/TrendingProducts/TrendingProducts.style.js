import styled from "styled-components";
export const Container = styled.div `
  width: 100%;
display: flex;
  flex-direction: column;
  padding: 10%;
  box-sizing: border-box;

`
export const TitleArea = styled.div `

`
export const ImageItem = styled.img`
src:${props => props.src};
  max-width:100%;
  width: 100%;

`
export const ItemsArea = styled.div `
  display: flex;
  flex-wrap: wrap;
  
`

export const Item = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 20%;
  padding: 20px;
  box-sizing: border-box;
`

export const NameAndPrice = styled.div`
    display: flex;
  justify-content: space-between;
`

export const Price = styled.div `
  display: flex;
  align-items: center;
  text-align: center;
  max-height: 70%;
    background: #efa15c;
  color: #fff;
  border-radius: 40px;
  font-size: 12px;
   padding: 8px;
`

export const TexT = styled.p `
font-size: 12px;
`
