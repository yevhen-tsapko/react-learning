import { Link, Outlet } from "react-router-dom";
export const About = () => {
  return (
    <main>
      <h1>About Us</h1>
      <ul>
        <li>
          <Link to="mission">Read about our mission</Link>
        </li>
        <li>
          <Link to="team">Get to know the team</Link>
        </li>
        <li>
          <Link to="reviews">Go through the reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};
