import { FaUserAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ data: { id, name, phone } }) {
  return (
    <>
      <div>
        <div className={css.container}>
          <FaUserAlt />
          <p>{name}</p>
        </div>
        <div className={css.container}>
          <FaPhoneAlt />
          <a href={`tel: + ${phone}`}>{phone}</a>
        </div>
      </div>
      <button className={css.btn}>Delete</button>
    </>
  );
}
