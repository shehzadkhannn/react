import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const param = useParams();
  console.log(param);
  return (
    <div>
      <h1> {param.id} Courses details</h1>
    </div>
  );
};

export default CourseDetails;
