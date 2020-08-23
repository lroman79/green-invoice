export default function objectFromArray(arr, prop = 'id') {
  if (!Array.isArray(arr) || !arr.length) {
    return {};
  }
  return arr.reduce((acc, item) => {
    acc[item[prop]] = item;
    return acc;
  }, {});
}
