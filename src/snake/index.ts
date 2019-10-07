type Vector2D = {
  x: number;
  y: number;
};

type Cell = '.' | 'x';

type World = Array<Array<Cell>>;

// const world = [
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0]
// ];

const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

const createWorld = (x: number, y: number = x): World =>
  Array.from({ length: y }).map(() => Array.from({ length: x }, () => '.'));

const addToRow = (row: Array<Cell>, index: number, value: Cell) => {
  const rowCopy = [...row];
  rowCopy[index] = value;

  return rowCopy;
};

const addToWorld = (world: World, vector: Vector2D, value: Cell): World => {
  return world.map((row, rowIndex) =>
    rowIndex === vector.y ? addToRow(row, vector.x, value) : [...row],
  );
};

const rowReducer = (cellsString: string, cell: Cell) =>
  `${cellsString} ${cell}`;

const worldReducer = (rowsString: string, row: Array<Cell>) =>
  `${rowsString}\n${row.reduce(rowReducer, ``)}`;

const worldToString = (world: World): string => {
  const result = world.reduce(worldReducer, ``);
  return result;
};

const printWorld = (world: World) => {
  clearConsole();

  console.log(worldToString(world));
};

const createRandomVector = (maxX: number, maxY: number) => ({
  x: random(0, maxX),
  y: random(0, maxY),
});

const clearConsole = () => {
  // process.stdout.write("\033c");
  // process.stdout.write("\x1bc");
  console.log('\x1Bc');
};

// printWorld(world);

const WORLD_SIZE = 5;

const world = createWorld(WORLD_SIZE);
const randomVector = createRandomVector(WORLD_SIZE, WORLD_SIZE);
const newWorld = addToWorld(world, randomVector, 'x');

const play = () => {
  setInterval(() => printWorld(newWorld), 1000);
};

export { play };
