const corePlugins = [
  'removeTitle',
  'preset-default',
  'removeStyleElement',
  'removeEmptyContainers',
  'sortAttrs',
  'removeUselessDefs',
  'removeEmptyText',
  'removeEditorsNSData',
  'removeEmptyAttrs',
  'removeHiddenElems',
];

const iconsPlugins = [
  ...corePlugins,
  {
    name: 'removeAttrs',
    params: {
      attrs: "(id|class|data-name|fill|width|height|viewBox|fill-rule)"
    }
  },
];

const spinnersPlugins = [
  ...corePlugins,
  {
    name: 'removeAttrs',
    params: {
      attrs: "(id|class|data-name|fill|width|height|fill-rule)"
    }
  },
  {
    name: 'addAttributesToSVGElement',
    params: {
      attributes: [
        {
          'aria-hidden': true,
        },
      ],
    },
  }
];


export { iconsPlugins, spinnersPlugins };