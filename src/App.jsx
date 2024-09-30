import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Routes
import websiteRoutes from "./Routes/websiteRoutes";
import freelancerRoutes from "./Routes/freelanceRoutes";

// UIs
import AppLayout from "./ui/AppLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [websiteRoutes, freelancerRoutes],
  },
]);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
