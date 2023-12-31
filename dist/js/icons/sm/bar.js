import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M3.13 3.407a.75.75 0 01.678-1.157h16.384a.75.75 0 01.677 1.157l-6.6 9.169a4.238 4.238 0 00-.019 4.86l3.411 3.161a.75.75 0 01-.68 1.153H7.02a.75.75 0 01-.68-1.153l3.411-3.16a4.238 4.238 0 00-.02-4.861zM14.25 8.25a2.25 2.25 0 000-4.5 2.25 2.25 0 100 4.5z" /></svg>);