import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M12 6a1.768 1.768 0 00-.8.182.453.453 0 00-.2.418v1.508A.918.918 0 0012 9a.918.918 0 001-.892V6.6a.456.456 0 00-.204-.413A1.7 1.7 0 0012 6zm3.107 3.426a.522.522 0 01.739-.002l.001.002a.527.527 0 010 .742l-1.172 1.176a3.539 3.539 0 00-1.022 2.212l-.285 3.525a1 1 0 01-.997.92h-.742a1 1 0 01-.996-.92l-.287-3.525a3.539 3.539 0 00-1.02-2.212l-1.173-1.176a.524.524 0 01.738-.743v.001l1.543 1.547A2.107 2.107 0 0012 11.5a2.107 2.107 0 001.566-.527z" /></svg>);