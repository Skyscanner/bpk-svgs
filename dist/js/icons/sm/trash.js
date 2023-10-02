import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M7.5 2.842A.158.158 0 017.342 3H4.5a1.5 1.5 0 000 3h15a1.5 1.5 0 000-3h-2.89a.11.11 0 01-.11-.11.593.593 0 00-.364-.524A9.288 9.288 0 0012 1.5a9.272 9.272 0 00-4.208.884.515.515 0 00-.292.458zM18.415 7.5a1.036 1.036 0 011.081 1.083L18.51 19.5a3.372 3.372 0 01-3.254 3h-6.51a3.372 3.372 0 01-3.254-3L4.504 8.583A1.036 1.036 0 015.585 7.5z" /></svg>);