import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <h1 className="display-1 text-center mt-5 text-danger">
        <i class="fa fa-frown-o me-3" aria-hidden="true"></i>
        Page Not Found <i class="fa fa-frown-o" aria-hidden="true"></i>
      </h1>
      <p className="text-center">
        The page you are looking is not available .Click{" "}
        <Link to="/">HERE</Link> for home page.
      </p>
    </>
  );
};

export default PageNotFound;
