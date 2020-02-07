/* Direction values that the snake could have */
const LEFT  = 0,
      RIGHT = 1,
      UP    = 2,
      DOWN  = 3;

/** The direction the snake is currently going */
let direction = RIGHT;

/** 
 * Event handler to change the snake's direction.
 *
 * @param {KeyboardEvent} The event object representing the keyboard press
 */
const changeDirection = event => {
  if (event.key === 'a')
    direction = LEFT;
  else if (event.key === 'd')
    direction = RIGHT;
  else if (event.key === 'w')
    direction = UP;
  else if (event.key === 's')
    direction = DOWN;
}

/* Mount the event handler to the onKeyDown event */
document.addEventListener('keydown', changeDirection);

/* Expose a function that gets the direction the user inputted */
export function getDirection() {
  return direction;
}

