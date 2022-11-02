export class GetCountries {
  cosntructor() {}

  async getCountries() {
    const response = await fetch("https://restcountries.com/v3.1/all"),
      data = await response.json();

    return data;
  }
}
