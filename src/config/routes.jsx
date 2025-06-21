import Home from "../modules/Home/Home";
import Orders from "../modules/Orders/Orders";
import Stuff from "../modules/Stuff/Stuff";
import Table from "../modules/Table/Table";
import Waiter from "../modules/Waiter/Waiter";

export const routes = () => {
  return [
    {
      id: 1,
      path: "/",
      element: <Home />,
    },
    {
      id: 2,
      path: "/orders",
      element: <Orders />,
    },
    {
      id: 3,
      path: "/stuff",
      element: <Stuff />,
    },
    {
      id: 4,
      path: "/waiter",
      element: <Waiter />,
    },
    {
      id: 5,
      path: "/table",
      element: <Table />,
    },
  ];
};
