import { Link, Outlet, useLocation } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

// Utils;
import { convertToTitleCase } from "../../../../utils";

const ListingsLayout = () => {
  const { pathname } = useLocation();
  const currentPath = pathname.split("/").filter((x) => x);

  const breadcrumbPath =
    currentPath[0] === "admin" ? currentPath.slice(1) : currentPath;

  return (
    <div className="flex flex-col gap-6">
      <nav>
        <ul className="flex w-fit flex-row items-center gap-10 font-inter text-xl font-semibold text-grey-300">
          {breadcrumbPath.map((name, index) => {
            const routeTo = `/admin/${breadcrumbPath.slice(0, index + 1).join("/")}`;
            const isLast = index === breadcrumbPath.length - 1;

            return (
              <li key={name} className="relative">
                <Link to={routeTo} className={isLast ? "text-pry-500" : ""}>
                  {convertToTitleCase(
                    name.charAt(0).toUpperCase() + name.slice(1),
                  )}
                </Link>
                {!isLast && (
                  <ChevronRightIcon className="absolute -right-8 top-0 h-full w-5 text-grey-400" />
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default ListingsLayout;
