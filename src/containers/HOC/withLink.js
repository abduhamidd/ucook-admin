import React from "react";
import {Link} from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default (path) => {
  return (children) => {
    if (path) {
      return <Link to={path}>{children}</Link>;
    }
    return children;
  };
};
