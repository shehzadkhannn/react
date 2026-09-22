import Left from "./leftcontent";
import Right from "./rightcontent";

const pagecontent = (props) => {
  return (
    <div className="h-[90vh] px-6 py-3  flex justify-center">
      <Left />
      <Right user={props.user} />
    </div>
  );
};

export default pagecontent;
