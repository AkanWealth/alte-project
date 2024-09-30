import { NavLink, Outlet } from "react-router-dom";

const Policies = () => {
  return (
    <div className="px-5 py-8 md:py-12 lg:px-10 lg:py-28">
      <section className="inner grid grid-rows-[auto_1fr] gap-4 lg:grid-cols-[auto_1fr] lg:grid-rows-1 lg:gap-28">
        <aside className="lg:pt-4">
          <nav className="flex flex-col gap-4 font-inter text-base font-normal text-grey-300 lg:text-xl">
            <NavLink
              to="privacy-policy"
              className="[&.active]:text-lg [&.active]:font-medium [&.active]:text-pry-500 lg:[&.active]:text-2xl"
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to="cookies-policy"
              className="[&.active]:text-lg [&.active]:font-medium [&.active]:text-pry-500 lg:[&.active]:text-2xl"
            >
              Cookies Policy
            </NavLink>
          </nav>
        </aside>
        <Outlet />
      </section>
    </div>
  );
};

export default Policies;
