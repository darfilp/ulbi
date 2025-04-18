import { NavLink } from "react-router-dom";

function MainPage() {
  return (
    <div className="">
      <NavLink to="/about" end>
        AboutPage
      </NavLink>
      <div className="">MainPage</div>
    </div>
  );
}

export default MainPage;
