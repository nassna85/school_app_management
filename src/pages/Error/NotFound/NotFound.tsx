import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Not Found</h1>
      <Link to="/">Return to dashboard</Link>
    </div>
  );
};

export default NotFound;
