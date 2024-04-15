import path from 'path';
import Stream from "stream";

import {transform} from '@svgr/core';
import camelcase from 'camelcase';
import { PluginError } from 'gulp-util';

import template from './template.mjs';

const PLUGIN_NAME = "svgr"

const svgoCommonPlugins = [
  { name: 'removeTitle' },
  { name: 'preset-default' },
  { name: 'removeStyleElement' },
  { name: 'removeEmptyContainers' },
  { name: 'sortAttrs' },
  { name: 'removeUselessDefs' },
  { name: 'removeEmptyText' },
  { name: 'removeEditorsNSData' },
  { name: 'removeEmptyAttrs' },
  { name: 'removeHiddenElems' },
  {
    name: 'removeAttrs',
    params: {
      attrs: [
        'id',
        'class',
        'data-name',
        'fill',
        'width',
        'height',
        'fill-rule',
      ],
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
    }
  }
];

export default function svgrPipe (options) {
  const sizeMapping = {
    sm: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  };
    const stream = new Stream.Transform({
      objectMode: true
    });
  
    // eslint-disable-next-line no-underscore-dangle
    stream._transform = function streamTransform (file, encoding, cb) {
      if (file.isNull()) {
        return cb(null, file);
      }
  
      if (file.isStream()) {
        return cb(new PluginError(PLUGIN_NAME, 'Streaming not supported'));
      }
      
        
      if (file.isBuffer()) {
        transform(
            file.contents.toString(),
            { 
              icon: sizeMapping[options.size],
              plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
              svgoConfig: { plugins: svgoCommonPlugins },
              svgProps: { fill: "{props.fill}" },
              typescript: true,
              template
            },
            { componentName: camelcase(path.basename(file.path))},
        ).then(jsCode => {
            // eslint-disable-next-line no-param-reassign
            file.contents = Buffer.from(jsCode);
            return cb(null, file);
        })
      }
      return cb(new PluginError(PLUGIN_NAME, 'Data type not supported'));
    };
  
    return stream;
  };