import "./App.css";
import Home from "./components/Home";
// import Products from "./components/Products";
// import Sidebar from "./components/Sidebar";
// import Billing from "./components/billing";
import OrdersHistory from "./components/OrdersHistory";

function App() {
  return (
    <div className="relative w-full h-screen bg-slate-200">
      {/* <Sidebar />
      <Billing /> */}
      {/* <Products /> */}
      {/* <OrdersHistory/> */}
      <Home />
    </div>
  );
}

export default App;
