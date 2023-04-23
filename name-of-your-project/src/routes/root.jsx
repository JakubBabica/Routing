import { Outlet, Link, useLoaderData, Form,redirect,} from "react-router-dom";
import { getContacts, createContact } from "../contacts";
export async function action() {
  return redirect(`/contacts/edit`);
}
export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}
export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <nav>
          <Link to={`contacts/edit`}>
                  <i>Pokemons</i>
          </Link>
          </nav>
        </div>
        <div id="detail">   <Outlet /></div>
      </>
    );
  }