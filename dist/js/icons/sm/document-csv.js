import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M4.127 16.5a3.715 3.715 0 003.963-3.1c.013-.125-.038-.162-.14-.162H6.673a.147.147 0 00-.152.125 2.237 2.237 0 01-2.393 1.687c-1.215 0-2.481-.988-2.481-3.05 0-2.063 1.266-3.05 2.481-3.05a2.238 2.238 0 012.393 1.688.147.147 0 00.152.124h1.279c.101 0 .152-.024.139-.125A3.7 3.7 0 004.127 7.5C2.127 7.5 0 8.85 0 12s2.127 4.5 4.127 4.5zm8.253 0c2.064 0 3.419-1 3.419-2.775 0-1.387-1.43-2.012-2.937-2.425-1.127-.313-2.102-.65-2.102-1.388 0-.65.658-.962 1.481-.962.886 0 1.57.388 1.697 1.163.012.087.038.125.126.125h1.342c.089 0 .127-.038.127-.125C15.495 8.75 14.229 7.5 12.267 7.5c-1.608 0-3.102.887-3.102 2.488 0 1.437 1.127 2.1 3.026 2.575 1.215.3 2.013.7 2.013 1.324 0 .688-.671 1.163-1.748 1.163-1.088 0-1.835-.488-1.924-1.5-.012-.088-.038-.125-.127-.125H9.076c-.088 0-.126.037-.126.125a3.178 3.178 0 003.43 2.95zm6.885-.125h1.52a.154.154 0 00.164-.125l3.038-8.488A.16.16 0 0024 7.7q0-.075-.114-.075h-1.469a.157.157 0 00-.177.125l-2.215 6.75-2.216-6.75a.157.157 0 00-.177-.125h-1.469q-.114 0-.114.075a.163.163 0 00.013.063L19.1 16.25a.155.155 0 00.165.125z" /></svg>);