import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M8.25 7.358a.493.493 0 01.219-.399 3 3 0 10-3.438 0 .493.493 0 01.219.4v9.283a.493.493 0 01-.219.399 3 3 0 103.438 0 .494.494 0 01-.219-.4V14.25A.75.75 0 019 13.5h6.75a3 3 0 003-3V7.358a.493.493 0 01.219-.399 3 3 0 10-3.438 0 .493.493 0 01.219.4V9.75a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75z" /></svg>);