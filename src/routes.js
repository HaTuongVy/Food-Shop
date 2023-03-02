import Aboutus from "./pages/About";
import AddressAdd from "./pages/AddressAdd";
import AddressList from "./pages/AddressList";
import ChangePass from "./pages/ChangePass";
import Home from "./pages/Home";
import ManagerAccount from "./pages/ManagerAccount";
import New from "./pages/New";
import NewDetail from "./pages/NewDetail";
import ShopBasket from "./pages/ShopBasket";
import ShopStore from "./pages/ShopStore";

const routes = [
  { path: "", component: <Home /> },
  { path: "home", component: <Home /> },
  { path: "shopbasket", component: <ShopBasket /> },
  { path: "shopstore", component: <ShopStore /> },
  { path: "qltk", component: <ManagerAccount /> },
  { path: "sdc", component: <AddressList /> },
  { path: "addressadd", component: <AddressAdd /> },
  { path: "tdmk", component: <ChangePass /> },
  { path: "about", component: <Aboutus /> },
  { path: "new", component: <New /> },
  { path: "newdetail", component: <NewDetail /> },
];

export default routes;
