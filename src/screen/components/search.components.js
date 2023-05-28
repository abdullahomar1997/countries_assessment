import React, { useContext, useEffect, useState } from "react"
import { Searchbar } from 'react-native-paper';
import styled from "styled-components/native";

const SearchContainer = styled.View`
    padding: 5px;
`;

export const Search = ({ isFavouritesToggled, onFavouritesToggle }) => {

    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        setSearchKeyword(keyword)
    }, [keyword])

    return (
        <SearchContainer>
            <Searchbar
                icon={isFavouritesToggled ? "heart" : "heart-outline"}
                onIconPress={onFavouritesToggle}
                placeholder="Search for the location"
                value={searcshKeyword}
                onSubmitEditing={() => {
                    search(searchKeyword);
                }}
                onChangeText={(text) => {
                    setSearchKeyword(text)
                }}
            />
        </SearchContainer>
    )
}