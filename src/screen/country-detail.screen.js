import React from 'react'
import { CountryInfoCard, InfoCard } from './components/country-info-card.components';
import { SafeArea } from '../utils/safe-area.components.';
import { CountryAccordion } from './components/country-accordion.component';

export const CountryDetailScreen = ({ route }) => {
    const { country } = route.params;

    return (
        <SafeArea>
            <CountryInfoCard country={country} />
            <CountryAccordion country={country} />
        </SafeArea>
    )
}