import { useSelector } from "react-redux";
import { AiOutlineUser } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import './avatar.scss';

const UserAvatar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="user-avatar mb-5">
      {
        user?.roles?.includes("Administrator") ? <RiAdminLine size={150} className="usericon" /> : <AiOutlineUser className="usericon" size={150} />
      }
      <h4>{user?.firstName} {user?.lastName}</h4>
      <p style={{ overflowWrap: "break-word", fontSize: "small" }}>
        {user?.email}
      </p>
    </div>
  )
};

export default UserAvatar;