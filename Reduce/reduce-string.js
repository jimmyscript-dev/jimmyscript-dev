const cities = ['Vancouver', 'Berlin', 'Seattle', 'Toronto'];

const concatCities = cities.reduce((concat, city) => {
    if (city === 'Vancouver') {
        return concat;
    }

    return concat + city + '-';
})

console.log(concatCities); // Toronto reduce returns the element of the array


