import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12 1.5A10.5 10.5 0 1022.5 12 10.5 10.5 0 0012 1.5zM13.5 18a1.5 1.5 0 01-3 0H9a1.5 1.5 0 010-3h4.5a.75.75 0 000-1.5h-2.25a3.751 3.751 0 01-.748-7.425Q10.5 6.038 10.5 6a1.5 1.5 0 113 0H15a1.5 1.5 0 010 3h-3.75a.75.75 0 000 1.5h2.25a3.75 3.75 0 010 7.5z" /></svg>);