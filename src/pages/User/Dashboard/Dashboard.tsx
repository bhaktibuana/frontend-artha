import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Dashboard</div>
      <button onClick={() => navigate("123123")}>navigate</button>
    </>
  );
};

export default Dashboard;
