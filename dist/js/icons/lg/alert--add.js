import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M20.552 15.606l-.497-.995A10 10 0 0119 10.14V9.5a7 7 0 00-14 0v.64a10 10 0 01-1.055 4.47l-.497.996a2 2 0 001.79 2.894h13.525a2 2 0 001.79-2.894zM15 11.5h-2v2a1 1 0 01-2 0v-2H9a1 1 0 110-2h2v-2a1 1 0 012 0v2h2a1 1 0 010 2zm-.08 8.959a2.141 2.141 0 01-1.86 1.041h-2.12a2.138 2.138 0 01-1.86-1.041c-.28-.485.215-.959.8-.959h4.238c.585 0 1.081.474.8.959z" /></svg>);