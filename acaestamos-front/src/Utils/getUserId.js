import { jwtDecode } from "jwt-decode";

const getUserId = () => {
  const token = localStorage?.getItem("accessToken");
  const decoded = jwtDecode(token);
  console.log(decoded);
  return decoded?.idUser;
};

export default getUserId;
