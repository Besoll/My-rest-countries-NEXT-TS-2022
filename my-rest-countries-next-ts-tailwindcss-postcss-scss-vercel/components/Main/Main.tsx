import s from "./Main.module.css";
import { Loading, NotFound, Countries, Search, Filter } from "@components/index";
import { GetCountries } from "framework/getCountries";
import { useEffect, useState } from "react";
import { numberWithCommas } from "utils/numberWithCommas";
import { SearchIcon } from "@assets/icons";

const Main = () => {
  const [countries, setCountries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const country = new GetCountries();
    country.getCountries().then((res) => {
      setCountries(res);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <div className={s.containerTop}>
        <Search
          icon={<SearchIcon />}
          placeholder="Search for a country..."
          setCountries={setCountries}
          setLoading={setLoading}
        />
        <Filter
          type={"region"}
          value={["Africa", "America", "Asia", "Europe", "Oceania"]}
          setCountries={setCountries}
          setLoading={setLoading}
        />
      </div>

      <main className={loading ? s.loading : s.loaded}>
        <div className={s.main}>
          <div className={s.container}>
            {loading ? (
              <Loading />
            ) : countries === (false as any) ? (
              <NotFound />
            ) : (
              countries && countries.map((country) => (
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
    </div>
  );
};

export default Main;
