import { useNavigate } from "react-router-dom";
const MyProfilePage = () => {
  const navigate = useNavigate();
  return (
    <button
      className="px-4 py-2 bg-transparent border-2 border-black hover:border-transparent hover:bg-green-400 hover:text-white rounded-md m-5"
      onClick={() => navigate("/")}
    >
      Back to Home
    </button>
  );
};

export default MyProfilePage;
