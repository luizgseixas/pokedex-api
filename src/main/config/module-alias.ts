import { addAlias } from 'module-alias';
import { resolve } from 'path';

const ENVIRONMENT = process.env.NODE_ENV === 'PRODUCTION' ? 'dist' : 'src';

addAlias('@src', resolve(ENVIRONMENT));
