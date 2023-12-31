import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M19.5.75h-15a3 3 0 00-3 3v6.737a3 3 0 002.176 2.885l5.795 1.655a4.5 4.5 0 105.058 0l5.795-1.655a3 3 0 002.176-2.885V3.75a3 3 0 00-3-3zM12 20.25a1.5 1.5 0 111.5-1.5 1.5 1.5 0 01-1.5 1.5zm4.5-10.894a1.5 1.5 0 01-1.088 1.442l-3 1.202a1.5 1.5 0 01-.824 0l-3-1.202A1.5 1.5 0 017.5 9.356V5.25A1.5 1.5 0 019 3.75h6a1.5 1.5 0 011.5 1.5z" /></svg>);