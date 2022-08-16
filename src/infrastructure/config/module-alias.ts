import { addAlias } from 'module-alias'
import { resolve } from 'path'

addAlias('@', resolve(process.env.APP_ENV ? 'build' : 'src'))
