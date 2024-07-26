import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../contacts_api";
import { useEffect } from "react";
import {
  selectContacts,
  selectError,
  selectLoading,
} from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contactsList = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (loading) return <p className={css.loading}>Loading...</p>;
  if (error)
    return (
      <p className={css.error}>
        Something went wrong...Please reload the page :(
      </p>
    );

  return (
    <ul className={css.list}>
      {contactsList.map((contact) => (
        <li className={css.item} key={contact.id}>
          {contactsList.length > 0 ? (
            <Contact data={contact} />
          ) : (
            <p>--No contacts--</p>
          )}
        </li>
      ))}
    </ul>
  );
}
