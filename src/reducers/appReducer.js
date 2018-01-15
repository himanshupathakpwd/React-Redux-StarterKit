import { GET_APP_DETAILS } from '../constants'

export const app = (state = {}, action) => {
  switch (action.type) {
    case GET_APP_DETAILS:
      return {
        name: 'Redux Starterkit APP',
        version: '1.0'
      }
    default:
      return state
  }
}
