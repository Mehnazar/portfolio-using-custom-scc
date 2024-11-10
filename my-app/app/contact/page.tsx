import Header from "@/components/header/header";
import ContactStyle from "./contact.module.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <Header />
      <div className="contact-container">
        <h1 className="contact-title">Contact Information</h1>
        <div className="contact-info">
          <ul>
            <li>Phone: +92-346-3863672</li>
            <li>Email: <a href="mailto:s.mehnazar@yahoo.com">s.mehnazar@yahoo.com</a></li>
            <li>
              <a href="https://github.com/Mehnazar">Github: https://github.com/Mehnazar</a>
            </li>
            <li>
              LinkedIn: <a href="https://linkedin.com/in/mehnazar-umair-2972ba2ba">Mehnazar Umair</a>
            </li>
            <li>Address: Nazimabad, Khi, Sindh</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
