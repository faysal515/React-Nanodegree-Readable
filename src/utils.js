import moment from 'moment'

export const getReadableDate = time => {
  return moment(time).format('dddd, MMMM Do YYYY')
}

export const dateForComment = time => {
  return moment(time).format('DD MMMM')
}