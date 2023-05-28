export const countriesTransform = (results = [] ) => {
    const mappedResults = results.map((country) => {
        return {
            name:country.name.common,
            capital:country.capital,
            region:country.region,
            subregion:country.subregion,
            population:country.population,
            area:country.area,
            timezones:country.timezones,
            flag:country.flags.png,
        };
    })
    return mappedResults;
}