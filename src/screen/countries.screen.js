import React, { useContext, useState } from 'react'
import { View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { CountryList } from './components/country-list.styles';
import { SafeArea } from '../utils/safe-area.components.';
import { CountriesContext } from '../service/countries.context';
import { CountryInfoCard2 } from './components/country-info-card.components2';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Search } from './components/search.components';

const ListContainer = styled(View)`
  justify-content: center;
`;

const Loading = styled(ActivityIndicator)`
    margin-left: -25px;
`
const LoadingContainer = styled.View`
    position: absolute;
    top:50%;
    left:50%;
`

export const CountriesScreen = ({ navigation }) => {
    const { isLoading,countries } = useContext(CountriesContext);
    return (
        <SafeArea>
            {isLoading && (
                <LoadingContainer>
                    <Loading animating={true} color="##0000ff" />
                </LoadingContainer>
            )}
            <Search />
            <CountryList
                data={countries}
                numColumns={3}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={{width:"33%"}} onPress={() => navigation.navigate("CountryDetail", {
                            country: item
                        })}>
                            <CountryInfoCard2 country={item} />
                         </TouchableOpacity>
                    )
                }}
                keyExtractor={(item) => item.name}
                contentContainerStyle={ListContainer}
            />
        </SafeArea>
    )
}
