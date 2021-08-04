export function dateBuilder(date = new Date(), options = {}) {
  let opts = {
    ...options,
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleString("en-US", opts);
}
