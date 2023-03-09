export const getDescription = (feed = '') => {
  const parser = new DOMParser()
  const xmlDoc = parser.parseFromString(feed, 'text/xml')
  const tagElement = xmlDoc.getElementsByTagName('description')[0]

  return tagElement.textContent
}
