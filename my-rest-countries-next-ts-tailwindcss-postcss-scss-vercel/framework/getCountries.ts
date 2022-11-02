export class GetCountries {
  cosntructor() {}

  async getCountries() {
    const response = await fetch("https://restcountries.com/v3.1/all"),
      data = await response.json();

    return data;
  }

  async getCountriesByName(name: string | string[]) {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`),
      data = await response.json();

    return data.status === 404 ? false : data
  }

  async getCountryByRegion(region: string | string[]) {
    const response = await fetch(`https://restcountries.com/v3.1/region/${region}`),
      data = await response.json()
    
      return data.status === 404 ? false : data
  }
}
