import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <>
      <p className={css.text}>Find contacs by name</p>
      <input onChange={handleSearch} className={css.input} type="text" />
    </>
  );
}
