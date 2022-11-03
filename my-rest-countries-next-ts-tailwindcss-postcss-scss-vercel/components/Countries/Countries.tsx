import Link from "next/link";
import s from "./Countries.module.css";
import Image from "next/image";
import { Filter } from "@components/index";

const Countries = ({
  flag,
  name,
  capital,
  region,
  population,
}: {
  flag: string;
  name: string;
  capital: string;
  region: string;
  population: string;
}) => {
  return (
    <Link href={`/country/${name}`}>
      <div className={s.container}>
        <div
          className={s.CardHeader}
          style={{ backgroundImage: `url(${flag})` }}
        ></div>
        <div className={s.CardBody}>
          <h1>{name}</h1>
          <ul>
            <li>
              Population: <span>{population}</span>
            </li>
            <li>
              Region: <span>{region}</span>
            </li>
            <li>
              Capital: <span>{capital}</span>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default Countries;
