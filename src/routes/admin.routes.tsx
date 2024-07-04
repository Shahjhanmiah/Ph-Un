import { ReactNode } from "react";
import AdminDashbord from "../pages/Admin/AdminDashbord";
import CreatStudent from "../pages/Admin/CreatStudent";
import CreateAdmin from "../pages/Admin/CreateAdmin";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import { NavLink } from "react-router-dom";

//  const adminPaths2= [

//   {
//     name: "Dashbord",
//     path: "/admin/dashbord",
//     element: 'ADMIN_DASHBORD',
//   },
//   {
//     name: "User Manager",
//     Children: [
//       {
//         name: "create-admin",
//         path: "/admin/create-admin",
//         element: 'CREATE_ADMIN'
//       },
//       {
//         name: "create-facutly",
//         path: "/admin/create-facutly",
//         element: 'CREATE-FACULTY'
//       },

//       {
//         name: "create-student",
//         path: "/admin/create-student",
//         element: 'CREATE_STUDENT',
//       },
//     ],
//   },

 
// ];

type TRoute = {
  path:string;
  element:ReactNode;
}

type TSidebarItem={
  key:string;
  label:ReactNode;
  children?:TSidebarItem[]
}





export const adminPaths = [
  {
    name: 'Dashboard',
    path: "dashbord",
    
    element: <AdminDashbord></AdminDashbord>,
  },
  {

    
    name: 'Create Student',
    path: "create-student",
    element: <CreatStudent></CreatStudent>,
  },
  {
    name: 'Create Admin',
    path: "create-admin",
    element: <CreateAdmin></CreateAdmin>,
  },

  {
    path: "create-facutly",
    name: 'Create Faculty',
    element: <CreateFaculty></CreateFaculty>,
  },
];



export const adminSidebarItems = adminPaths.reduce(
    (acc: TSidebarItem[], item) => {
      if (item.path && item.name) {
        acc.push({
          key: item.name,
          label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
        });
      }
  
      if (item.children) {
        acc.push({
          key: item.name,
          label: item.name,
          children: item.children.map((child) => ({
            key: child.name,
            label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
          })),
        });
      }
  
      return acc;
    },
    []
  )


  export const  adminRoutes = adminPaths.reduce((acc:TRoute[],item)=>{
  if (item.path && item.element) {
     acc.push({
       path: item.path,
          element: item.element,
        });
      }
      if (item.children) {
             item.children.forEach((child) => {
              acc.push({
                path: child.path,
               element: child.element,
              });
            });
           }
   return acc;

},[]) 
