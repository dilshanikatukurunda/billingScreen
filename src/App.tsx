import "./App.css";
// import Sidebar from "./components/Sidebar";
// import Billing from "./components/billing";
import OrdersHistory from "./components/OrdersHistory";

function App() {
  return (
    <div className="relative w-full h-screen bg-slate-200">
      {/* <Sidebar />
      <Billing /> */}

      <OrdersHistory/>
    </div>
  );
}

export default App;
