import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";

export const adminPath = [
  {
    name: "dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Academic semester",
        path: "academic-semester",
        element: <AcademicSemester />,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "create admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "create faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "create student",
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
  },
];
