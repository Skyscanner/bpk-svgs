import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12 1.5A10.5 10.5 0 1022.5 12 10.5 10.5 0 0012 1.5zm4.06 10.623a1.5 1.5 0 01-2.12.059l-.44-.439V16.5a1.5 1.5 0 01-3 0v-4.758l-.44.44-.037.037A1.5 1.5 0 117.94 10.06L12 6l4.06 4.06v.001a1.5 1.5 0 010 2.062z" /></svg>);