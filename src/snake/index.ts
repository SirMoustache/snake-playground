import { createWorld, addToWorld, printWorld } from './world';

import { random } from '../utils';

const createRandomVector = (maxX: number, maxY: number) => ({
  x: random(0, maxX),
  y: random(0, maxY),
});

const WORLD_SIZE = 5;

const play = () => {
  const world = createWorld(WORLD_SIZE);
  const randomVector = createRandomVector(WORLD_SIZE, WORLD_SIZE);
  const newWorld = addToWorld(world, randomVector, 'x');

  setInterval(() => printWorld(newWorld), 1000);
};

export { play };
