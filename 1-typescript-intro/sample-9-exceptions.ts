function calculate(...args) {
  let sum = 0;
  if (args.length === 0) {
    throw new Error("Brak argumentów");
  } else {
    for (let i = 0; i < args.length; i++) {
      sum += args[i];
    }
  }
  return sum;
}
try {
  console.log(calculate());
} catch (e) {
  console.error(e);
}
