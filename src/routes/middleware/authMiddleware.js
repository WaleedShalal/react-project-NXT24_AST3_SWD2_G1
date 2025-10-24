import { redirect } from "react-router";

const authMiddleware = async (params, next) => {
  console.log("🚀 ~ authMiddleware ~ params:", params);
  // before
  // await next()
  // after
  // get info from cookie
  const isLoggedIn = true;
  if (!isLoggedIn) {
    throw redirect("/login");
  }
};

export default authMiddleware;
