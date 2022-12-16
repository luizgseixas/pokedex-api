import { addAlias } from 'module-alias';
import { resolve } from 'path';

addAlias('@src', resolve('dist'));
