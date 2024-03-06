import { useGetAllSemestersQuery } from "../../../redux/feature/academicSemister/academicSemester";

const AcademicSemester = () => {
  const { data } = useGetAllSemestersQuery(undefined);
  console.log(data);
  return (
    <div>
      <h2>Academic Semester Management</h2>
    </div>
  );
};

export default AcademicSemester;
