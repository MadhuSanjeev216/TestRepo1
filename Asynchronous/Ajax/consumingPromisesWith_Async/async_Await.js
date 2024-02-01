const getCountryData = async function (country) {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${country}`
  );
  console.log(response);

  const data = await response.json();
  console.log(data);
};
getCountryData('india');
