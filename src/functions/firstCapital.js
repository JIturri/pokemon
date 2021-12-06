export default function firstCapital(string) {
  string = string || "pikachu";
  return string[0].toUpperCase() + string.slice(1);
}
