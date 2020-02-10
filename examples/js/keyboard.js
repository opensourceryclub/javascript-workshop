/* Direction values that the snake could have */
export const Direction = {
      LEFT  : 0,
      RIGHT : 1,
      UP    : 2,
      DOWN  : 3
}

/** The direction the snake is currently going */
let direction = Direction.LEFT;

/** 
 * Event handler to change the snake's direction.
 *
 * @param {KeyboardEvent} The event object representing the keyboard press
 */
const changeDirection = event => {
  if (event.key === 'a')
    direction = Direction.LEFT;
  else if (event.key === 'd')
    direction = Direction.RIGHT;
  else if (event.key === 'w')
    direction = Direction.UP;
  else if (event.key === 's')
    direction = Direction.DOWN;
}

/* Mount the event handler to the onKeyDown event */
document.addEventListener('keydown', changeDirection);

/* Expose a function that gets the direction the user inputted */
export function getDirection() {
  return direction;
}

