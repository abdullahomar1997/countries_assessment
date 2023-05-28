import React, { useContext, useState } from 'react'
import { View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { CountryList } from './components/country-list.styles';
import { SafeArea } from '../utils/safe-area.components.';
import { CountriesContext } from '../service/countries.context';
import { CountryInfoCard2 } from './components/country-info-card.components2';

const ListContainer = styled(View)`
  justify-content: center;
`;

export const CountriesScreen = ({ navigation }) => {
    const { isLoading,countries } = useContext(CountriesContext);
    const [isToggled, setIsToggled] = useState();
    return (
        <SafeArea>
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
