import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M22.505 10.062A.616.616 0 0023 9.5V7a3 3 0 00-3-3H4a3 3 0 00-3 3v2.5a.616.616 0 00.495.562 2 2 0 010 3.876A.615.615 0 001 14.5V17a3 3 0 003 3h16a3 3 0 003-3v-2.5a.615.615 0 00-.495-.562 2 2 0 010-3.876zM14 15.945a1.001 1.001 0 11-2 0V9.67l-1.383 1.144a.965.965 0 01-1.36-.121q-.023-.028-.044-.058a1.095 1.095 0 01.17-1.482l2.191-1.814A1.496 1.496 0 0114 8.586z" /></svg>);