import "./App.css";
import Sidebar from "./components/Sidebar";
import Billing from "./components/billing";

function App() {
  return (
    <div className="relative w-full h-screen bg-slate-200">
      <Sidebar />
      <Billing />
    </div>
  );
}

export default App;
