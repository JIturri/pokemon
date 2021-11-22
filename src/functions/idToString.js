export default function strconcat(num) {
  let string = num.toString();
  if (string.length === 1) {
    return "#00" + string;
  } else if (string.length === 2) {
    return "#0" + string;
  } else if (string.length >= 3) {
    return "#" + string;
  }
}
