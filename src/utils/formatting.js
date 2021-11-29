export function spaceThousands(number) {
  const string = number.toString();
  if (string.length > 3) {
    return number.length > 6
      ? `${number.slice(0, number.length - 6)} ${number.slice(
          number.length - 6,
          number.length - 3,
        )} ${number.slice(number.length - 3, number.length)}`
      : `${number.slice(0, number.length - 3)} ${number.slice(
          number.length - 3,
          number.length,
        )}`;
  }
  return string;
}
