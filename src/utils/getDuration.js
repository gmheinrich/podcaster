import moment from 'moment'

export const getDuration = (timeMillis = 0) => moment.utc(timeMillis).format('HH:mm')
