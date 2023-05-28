import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"
import { CountriesScreen } from './screen/countries.screen';
import { CountryDetailScreen } from './screen/country-detail.screen';
import { CountriesContextProvider } from './service/countries.context';

const CountryStack = createStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <CountriesContextProvider>
                <CountryStack.Navigator screenOptions={{ ...TransitionPresets.ModalPresentationIOS }} >
                    <CountryStack.Screen
                        name="Countries"
                        component={CountriesScreen}    
                    />
                    <CountryStack.Screen
                        name="CountryDetail"
                        component={CountryDetailScreen}
                    />
                </CountryStack.Navigator>
            </CountriesContextProvider>
        </NavigationContainer>
    )
}