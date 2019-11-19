# Class 27

## Whiteboard Warm-Up

```js
/**
 * 
 * ALGORITHM
 *  - Traverse our tree
 *  - Track our next largest value
 *  - compare on two things
 * 
 * 
 * PSEUDOCODE
 * 
 *  HELPER FUNCTION findMin(node)
 *    current = node
 *    while current.left
 *      current = current.left
 *    return current
 * 
 * 
 *  if (targetNode.right) {
 *    return findMin(targetNode.right);
 *  }
 * 
 *  nextLargetNode = null
 * 
 *  current = root
 * 
 *  while current
 *    if current.value > targetNode.value
 *       nextLargestNode = current;
 *       current = current.left
 *    if current.value < target.value
 *       current = current.right
 * 
 * return nextLargestNode
 * 
 * 
 * */
```

## SASS
- A superset of css
- we still have styling block with selectors 
  
```scss
head {
  color: blue;

  p {
    color: pink;
  }
}

@mixin center-column {
  width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
```

## Snapshot Testing
- Using a library to pre-render our react code, and then compare that information with a test renderer.
- Testing the state of your components.

## Deployment checklist
- Make sure you have an up to date version of these config files:
  - `.travis.yml`
  - `.eslintrc.json`
  - `.gitignore`
  - `package.json`
    - these `scripts` must be present:
```json
    "start": "react-scripts start",
    "test": "react-scripts test --env=jsdom",
    "build": "react-scripts build",
    "lint": "eslint src/**/*.js"
```
- Push your code up to github and make sure travis is passing.
- Run `npm build` to make sure our static site files are created properly. 

## S3 Deployment
 1) Disable permission Blocking
    - This should be prompted on bucket creation.
 2) Go to Properties and enable static website hosting.
 3) Upload files
    - Click next until you see a section about permission, and make suer they are unblocked!
