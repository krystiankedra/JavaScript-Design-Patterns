import { pipe } from './utils/pipe'
import { users } from './utils/mock'
import { mapperName, mapperAge, pluck } from './users/mappers'

const usersMapper = pipe(
  mapperName,
  mapperAge,
  pluck('age')
)(users())

console.log(usersMapper)
