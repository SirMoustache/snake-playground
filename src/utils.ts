export const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

export const clearConsole = () => {
  // process.stdout.write("\033c");
  // process.stdout.write("\x1bc");
  console.log('\x1Bc');
};
