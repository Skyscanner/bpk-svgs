const template = (variables, { tpl }) => tpl`
${variables.imports};

${variables.interfaces};

export default ${variables.componentName} = (${variables.props}) => (
  ${variables.jsx}
);
`

export default template;