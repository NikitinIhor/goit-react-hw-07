import { FaUserAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";

export default function Contact({ data: { id, name, phone } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

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
      <button onClick={handleDelete} className={css.btn}>
        Delete
      </button>
    </>
  );
}
