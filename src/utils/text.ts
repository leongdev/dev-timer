export const formatMoney = (text) => {
  const splitted = text.toFixed(2).toString().split('.')
  return `${splitted[0]},${splitted[1]}`
}
