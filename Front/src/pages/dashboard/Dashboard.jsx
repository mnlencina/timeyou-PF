import { useState } from "react";
import Sidebar from "../../components/admin/sidebar/Sidebar";
import Nav from "../../components/admin/nav/Nav";
import FormUser from "../../components/admin/users/Form";
import Buys from "../../components/admin/buys/Buys";
import FormWatch from "../../components/admin/watch/Form";
import HomePage from "../../components/admin/home/HomePage";

const Dashboard = () => {
  const [view, setView] = useState("");
  const handleView = (viewName) => {
    setView(viewName);
  };

  return (
    <div>
      <Nav />
      {view === "home" && <HomePage />}
      {view === "users" && <FormUser />}
      {view === "watches" && <FormWatch />}
      {view === "buys" && <Buys />}
      <Sidebar handleView={handleView} />
    </div>
  );
};

export default Dashboard;
