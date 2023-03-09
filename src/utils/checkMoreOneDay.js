export const checkMoreOneDay = (timestamp) => {
  const timestampPlusOneDay = timestamp + 86400000
  const timeNow = Date.now()

  return timeNow > timestampPlusOneDay ? true : false
}
