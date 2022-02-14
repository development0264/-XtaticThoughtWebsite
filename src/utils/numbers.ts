export function abbreviateNumber(num, fixed) {
  if (!num) {
    return 0;
  }

  let precision = fixed;

  if (!fixed || fixed < 0) {
    precision = 0;
  }

  const b = num.toPrecision(2).split("e");
  const k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3);
  const c =
    k < 1
      ? num.toFixed(0 + precision)
      : (num / 10 ** (k * 3)).toFixed(1 + precision);
  const d = c < 0 ? c : Math.abs(c);
  return d + ["", "K", "M", "B", "T"][k];
}
