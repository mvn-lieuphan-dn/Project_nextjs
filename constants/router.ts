export const ROUTER = [
  {
    name: "admin",
    path: "/admin",
    permissions: ["admin"],
  },
  {
    name: "employees",
    path: "employees",
    permissions: ["admin"],
  },
  {
    name: "home",
    path: "/",
    permissions: ["admin", "user"],
  },
  {
    name: "contact",
    path: "/contact",
    permissions: ["admin", "user"],
  },
  {
    name: "profile",
    path: "/profile",
    permissions: ["admin", "user"],
  },
];
