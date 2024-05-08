import express from "express";
import { UserRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { searchRoutes } from "../modules/search/search.route";
const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/search",
    route: searchRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
