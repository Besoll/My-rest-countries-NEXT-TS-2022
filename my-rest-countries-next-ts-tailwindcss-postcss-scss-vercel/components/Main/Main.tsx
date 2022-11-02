import s from "./Main.module.css";
import { Loading, NotFound, Countries } from "@components/index";
import { GetCountries } from "framework/getCountries";
import { useEffect, useState } from "react";
import { numberWithCommas } from "utils/numberWithCommas";

const Main = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const country = new GetCountries();
    country.getCountries().then((res) => {
      setCountries(res);
      setLoading(false);
    });
  }, []);

  return (
    <main className={loading ? s.loading : s.loaded}>
      <div className={s.main}>
        <div className={s.container}>
          {loading ? (
            <Loading />
          ) : countries === (false as any) ? (
            <NotFound />
          ) : (
            countries.map((country) => (
              <Countries
                key={country.name.common}
                flag={country.flags[0] || country.flags.svg}
                name={country.name.common}
                population={numberWithCommas(country.population)}
                region={country.region}
                capital={country.capital}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default Main;
