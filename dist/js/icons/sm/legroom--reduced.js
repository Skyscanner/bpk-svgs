import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12.459 2.625a1.5 1.5 0 10-3 0v11.25a2.25 2.25 0 002.25 2.25h1.326a3 3 0 012.74 4.218l-.187.423a1.5 1.5 0 002.742 1.218l.187-.422a6 6 0 00-5.482-8.437h-.576z" /><path d="M6.459 4.125a1.5 1.5 0 011.5 1.5v9a3 3 0 003 3h1.5a1.5 1.5 0 010 3h-1.5a6 6 0 01-6-6v-9a1.5 1.5 0 011.5-1.5z" /></svg>);