import Contact from "./Contact";
import { Link } from "react-router-dom";

function ContactList({contacts}) {
  return (
    <div>
      {contacts.map((contact) => (
        <Link key={contact.id} to={`/detail/${contact.id}`}>
        <Contact key={contact.id} contact={contact} />
        </Link>
      ))}
    </div>
  );
}

export default ContactList;
