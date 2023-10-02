export function getTodaysDate() {
  const today = new Date();
  return `${
    today.getUTCMonth() + 1
  }/${today.getUTCDate()}/${today.getUTCFullYear()}`;
}
