import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "../Loader/Loader";
// import ContactForm from "../ContactForm/ContactForm";
// import ContactList from "../ContactList/ContactList";
import Layout from "../Layout/Layout";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);

export default function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Layout />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      {/* <ContactForm /> */}

      {/* <ContactList /> */}
    </>
  );
}
