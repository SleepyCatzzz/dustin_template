import { Home, Users } from '../Pages';

const Routes = [
  {
    name: "Home",
    path: "/",
    component: Home
  },
  {
    name: "Users",
    path: "/users",
    component: Users
  },
  {
    name: "Data",
    path: "/data",
    component: Home
  }
]

export { Routes }