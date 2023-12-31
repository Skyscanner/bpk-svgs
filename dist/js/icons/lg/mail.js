import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M2.024 6.62a.472.472 0 00.347.452L12 10.923l9.629-3.851a.473.473 0 00.347-.452A3 3 0 0019 4H5a3 3 0 00-2.976 2.62z" /><path d="M22 9.816a.5.5 0 00-.686-.465l-8.571 3.429a2 2 0 01-1.486 0L2.686 9.35A.5.5 0 002 9.816V17a3 3 0 003 3h14a3 3 0 003-3z" /></svg>);