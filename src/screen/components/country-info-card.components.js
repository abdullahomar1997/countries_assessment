import React from 'react'
import { CountryCard} from './country-info-card.styles';
import { styled } from 'styled-components/native';
import { Card } from 'react-native-paper';
import { Image, Text } from 'react-native';

export const Heading = styled.Text`
    font-size: 35px;
    font-weight: bold;
    padding-bottom: 20px;
    padding-top: 20px;
`;
export const Container = styled.Text`
    font-size: 40px;
    position: absolute;
`;

export const CountryCardCover = styled(Card.Cover)`
    padding: 10px;
    background-color: pink;
    position: relative;
    width: 100%;
`;

const StyledImage = styled(Image)`
  width: 40%;
  height: 30%;
  border-radius: 10px;
  position: absolute;
  right: 10px;
  top:10px;
  /* aspect-ratio: 1; */
`;

export const CountryInfoCard = ({ country }) => {

    const {
        name = "Kuwait",
        capital = 'Kuwait City',
        region = "Asia",
        subregion = "Western Asia",
        population = "4270563",
        area = "17818",
        timezones="UTC+03:00",
        flag= "https://flagcdn.com/w320/kw.png",
    } = country;

    return (
        <CountryCard >
            <StyledImage key={name} source={{ uri: flag }} resizeMode="contain" />
            <Heading>{name}</Heading>
            <Text>Capital City : {capital}</Text>
            <Text>Region : {region}</Text>
            <Text>Sub Region : {subregion}</Text>
            <Text>Population : {population}</Text>
            <Text>Area : {area}</Text>
            <Text>Timezones : {timezones}</Text>
        </CountryCard>
    )
}