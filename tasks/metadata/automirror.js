/* eslint-disable no-underscore-dangle */
/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2021 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {readFileSync} from 'node:fs';
import { join, dirname} from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const infoFile = join(__dirname, 'auto-mirrored-icons.txt');

const withAutoMirrorData = () => {
  const info = readFileSync(infoFile, 'utf8').split('\n');
  return (icon, data) => ({
    ...data,
    autoMirror: !!info.find((i) => i === icon),
  });
};

export default withAutoMirrorData;
