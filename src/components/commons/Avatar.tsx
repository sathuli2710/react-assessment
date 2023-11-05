import userlogo from "/assets/user-avatar.png";
import { useNavigate } from "react-router-dom";

const Avatar = ({ className }: { className?: string }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`w-[40px] h-[40px] rounded-full border-2 border-transparent hover:border-green-400 cursor-pointer ${className}`}
      onClick={() => navigate("/my-profile")}
    >
      <img src={userlogo} alt="user-avatar" width={40} height={40} />
    </div>
  );
};

export default Avatar;
