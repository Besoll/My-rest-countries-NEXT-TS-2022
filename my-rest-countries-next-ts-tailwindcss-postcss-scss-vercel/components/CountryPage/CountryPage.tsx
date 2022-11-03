import { GetCountries } from 'framework/getCountries';
import { useEffect, useState } from 'react'
import s from "./CountryPage.module.css"
import Image from "next/image"
import { Button } from '@components/index';
import Link from 'next/link';
import { numberWithCommas } from 'utils/numberWithCommas';
// import { useRouter } from "next/router";

interface CountryInfo {
    name: string;
    flag: string;
    nativeLanguage: string;
    population: number;
    region: string;
    capital: string;
    subRegion: string;
    topLevelDomain: string;
    currencies: { name: string }[];
    languages: string[];
    borderCountries: string[];
}

const CountryPage = ({
    name,
    flag,
    nativeLanguage,
    population,
    region,
    capital,
    subRegion,
    topLevelDomain,
    currencies,
    languages,
    borderCountries
}: CountryInfo) => {
    const getBorderName = new GetCountries()
    const [ borderCountryName, setBorderCountryName ] = useState<any[]>([])

    useEffect(() => {
        getBorderName.getCountriesByCode(borderCountries).then((data) => {
            setBorderCountryName(data)
        })
    }, [])

    

  return (
    <div className={s.container}>

        <div className={s.subContainer_Flag}>
            <Image
                src={ flag }
                alt={ name }
                // width={500}
                // height={500}
            />
        </div>

        <div className={s.subContainer_Details}>
            <div className={s.subContainer_Details_1st}>
                <h1>{ name }</h1>
                <p>
                    Native Language: 
                    <span>{ nativeLanguage }</span>
                </p>
                <p>
                    Population: 
                    <span>{ numberWithCommas(population) }</span>
                </p>
                <p>
                    Region: 
                    <span>{ region }</span>
                </p>
                <p>
                    Sub Region: 
                    <span>{ subRegion }</span>
                </p>
                <p>
                    Capital: 
                    <span>{ capital }</span>
                </p>
            </div>
            <div className={s.subContainer_Details_2nd}>
                <p>
                    Top Level Domain: 
                    <span>{ topLevelDomain }</span>
                </p>
                <p>
                    Currencies: 
                    <span>{ 
                        currencies && currencies.map((currency, index) => (
                            <>
                                {currencies.length >= 0 && index < currencies.length -1 ? (
                                    <>
                                        <li key={Math.floor(Math.random() * 10 * index)}>
                                            {currency.name}
                                        </li>
                                    </>
                                ) : (
                                    <li key={Math.floor(Math.random() * 10 * index)}>
                                        {currency.name}
                                    </li>
                                )}
                            </>
                        ))}
                    </span>
                </p>
                <p>
                    Languages: 
                    <span>{
                        languages && languages.map((language, index) => (
                            <>
                                {languages.length > 0 && index < languages.length -1 ? (
                                    <>
                                        <li key={Math.floor(Math.random() * 10 * index)}>
                                            {language}
                                        </li>
                                    </>
                                ) : (
                                    <li key={Math.floor(Math.random() * 10 * index)}>
                                        {language}
                                    </li>
                                )}
                            </>
                        ))}
                    </span>
                </p>
                
            </div>
        </div>

        <div className={s.subContainer_Borders}>
            <span>{ borderCountries && " Border Countries: "}</span>
            <div className={s.boundary_Borders}>
                <>
                    {borderCountries &&
                        borderCountryName && 
                        borderCountryName.map((borderCountry) => {
                            <Link href={`/country/${ borderCountry.name.common }`}>
                                <Button 
                                    type="secondary"
                                    text={ borderCountry.name.common }
                                    key={ borderCountry.name.common }
                                />
                            </Link>
                        })}
                </>                
            </div>
        </div>

    </div>
  )
}

export default CountryPage