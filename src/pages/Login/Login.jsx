import UserContext from "@/contexts/User/UserContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";

const initialValues = {
  userName: "",
  userEmail: "",
  userAge: "99",
};

export default function Login() {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  console.log("🚀 ~ Login ~ isLoggedIn:", isLoggedIn);

  const [userData, setUserData] = useState(initialValues);

  console.log("🚀 ~ Login ~ userData:", userData);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(initialValues);
    setIsLoggedIn(true);
    navigate("/cart", { replace: true });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    console.log({ name, value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="user-name">User Name</label>
        <input
          type="text"
          id="user-name"
          name="userNamee"
          onChange={handleChange}
          value={userData.userName}
        />
      </div>
      <div>
        <label htmlFor="user-email">User Email</label>
        <input
          type="email"
          id="user-email"
          name="userEmaill"
          onChange={handleChange}
          value={userData.userEmail}
        />
      </div>
      <div>
        <label htmlFor="user-age">User Age</label>
        <input
          type="number"
          id="user-age"
          name="userAgee"
          onChange={handleChange}
          value={userData.userAge}
        />
      </div>
      <button>Submit</button>
    </form>
  );
}
