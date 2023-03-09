import moment from 'moment'

export const getDate = (unformatDate) => moment(unformatDate).format('DD/MM/YYYY')
