function validateBrackets(str) {
  // remove all non bracket characters:
  const bracketsStr = str
    .split("")
    .filter(char => "{}()[]".includes(char))
    .join("");

  const stack = [];

  const map = {
    ")": "(",
    "}": "{",
    "]": "["
  };

  // if we see {([ lets add it to stack:
  for (let char of bracketsStr) {
    if ("{([".includes(char)) {
      stack.push(char);
    } else {
      const popped = stack.pop();
      if (popped !== map[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

validateBrackets("()()");
