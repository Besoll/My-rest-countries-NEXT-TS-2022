import s from "./filter.module.css";

const Filter = () => {
  return (
    <div className={s.root}>
      <div security={s.search}>Filter Search</div>
      <div security={s.select}>Filter Select</div>
    </div>
  );
};

export default Filter;
