import { GetCountries } from "framework/getCountries";
import React, { FC, ReactNode } from "react";
import s from "./Search.module.css";

interface SearchCountry {
  placeholder?: string;
  icon?: ReactNode | ReactNode[];
  value?: string;
  setCountries: (countries: any) => void;
  setLoading: (loading: boolean) => void;
}

const Search: FC<SearchCountry> = ({
  placeholder,
  icon,
  value,
  setCountries,
  setLoading,
}: SearchCountry) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let searchValue = event.target.value;
    const country = new GetCountries();

    if (searchValue === "") {
      country.getCountries().then((res) => {
        setCountries(res);
        setLoading(false);
      });
    } else {
      setLoading(true);
      country.getCountriesByName(searchValue).then((res) => {
        setCountries(res);
        setLoading(false);
      });
    }
  };
  return (
    <div className={s.container}>
      {icon && <button type="submit">{icon}</button>}
      <input
        type="text"
        placeholder={placeholder}
        name={placeholder}
        onChange={(event) => {
          handleChange(event);
        }}
      />
    </div>
  );
};

export default Search;
