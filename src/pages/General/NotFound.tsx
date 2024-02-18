import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>NotFound</div>
      <button onClick={() => navigate("dashboard")}>navigate</button>
    </>
  );
};

export default NotFound;
