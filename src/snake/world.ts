import { clearConsole } from '../utils';

export type EmptyCell = '.';
export type SnakeCell = 'x';

export type Cell = EmptyCell | SnakeCell;
export type World = Array<Array<Cell>>;
export type Vector2D = {
  x: number;
  y: number;
};

export const createWorld = (x: number, y: number = x): World =>
  Array.from({ length: y }).map(() => Array.from({ length: x }, () => '.'));

export const addToRow = (row: Array<Cell>, index: number, value: Cell) => {
  const rowCopy = [...row];
  rowCopy[index] = value;

  return rowCopy;
};

export const addToWorld = (
  world: World,
  vector: Vector2D,
  value: Cell,
): World => {
  return world.map((row, rowIndex) =>
    rowIndex === vector.y ? addToRow(row, vector.x, value) : [...row],
  );
};

export const rowReducer = (cellsString: string, cell: Cell) =>
  `${cellsString} ${cell}`;

export const worldReducer = (rowsString: string, row: Array<Cell>) =>
  `${rowsString}\n${row.reduce(rowReducer, ``)}`;

export const worldToString = (world: World): string => {
  const result = world.reduce(worldReducer, ``);
  return result;
};

export const printWorld = (world: World) => {
  clearConsole();

  console.log(worldToString(world));
};
