import { GetCountries } from "framework/getCountries";
import React, { useState } from "react";
import s from "./Filter.module.css";

interface Filter {
  type: string
  value: string[]
  setCountries: ( countries: any ) => void
  setLoading: ( loading: boolean ) => void
}

const Filter = ({ 
  type, 
  value,
  setCountries,
  setLoading
}: Filter) => {

  const [ selectedOption, setSelectedOption ] = useState("");

  const handleChange = (
    event: React.ChangeEvent<{ value: string }>
    ) => {
      let selectValue = event.target.value as string
      setSelectedOption(selectValue)

      const country = new GetCountries()

      setLoading(true)

      
      if ( selectValue === "" ) {
        country.getCountries().then((res) => {
          setCountries(res)
          setTimeout(() => {
            setCountries(res);
            setLoading(false)
          }, 500)
        })
      } else {
        country.getCountryByRegion(selectValue).then((res) => {
          setCountries(res)
          setTimeout(() => {
            setLoading(false)
          }, 500)
        })
      }

    }

  return (
      <select 
        className={s.container}
        name={type}
        id={type}
        value={selectedOption}
        onChange={(e) => {
          handleChange(e)
        }}
      >
        <option className="first" value="">
          Select a {type}
        </option>

        {value.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
  )
}

export default Filter;
