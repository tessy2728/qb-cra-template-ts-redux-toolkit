import React, { FC } from "react";
import { Link, useRouteError } from "react-router-dom";

export const ErrorPage: FC = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Error!</h1>
      <p>
        <Link to="/">Go back to home.</Link>
      </p>
    </div>
  );
};