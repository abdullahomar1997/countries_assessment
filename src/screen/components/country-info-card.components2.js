import React from 'react'
import styled from 'styled-components/native';
import { Image } from 'react-native';
import { Card } from 'react-native-paper';

export const CountryInfoCard2 = ({ country }) => {

    const {
        name = "Kuwait",
        flag= "https://flagcdn.com/w320/kw.png",
    } = country;

    return (
        <Item>
            <StyledImage source={{ uri: flag }} resizeMode="contain" />
            <ItemText>{name}</ItemText>
        </Item> 
    )
}


const Item = styled(Card)`
  flex: 1;
  /* justify-content: center; */
  align-items: center;
  /* padding: 10px; */
  height: 110px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 8px;
  margin: 5px;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 80%;
  border-radius: 50px;
  aspect-ratio: 1;
`;

const ItemText = styled.Text`
  font-size: 10px;
`;
