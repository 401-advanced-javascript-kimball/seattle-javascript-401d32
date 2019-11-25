# Class 31

## Hooks!!

- This is a more perfromant and purely functional way of creating react components.
- Allows us to create stateless JSX components and while also importing React functions meant for HOOKING into class React features.

```js
class App extends React.Component {
  constuctor() {
    this.state = {}
  }
 
  componentDidMount() {}

  render() {
    return <h1>Hello World</h1>
  }
}


// NOW


const App = () => {
  const [state, setState] = useState()

  return(
    <h1>Hello World</h1>
  )
}
```

### useState

- We now have to import the ability to use values like ~ `this.state` (but is not the same);
- Now we use getter and setters$$

### useEffect

- This is how we hook into lifecycle method / handling side effects.
- Handles things lide subscriptions
  - handleing events
  - Cleaning up side effects.

### useReducer

- This uses getters and setter more like how traditional this.setState would update values
- The getter is a intialState, and the setter is a function that handles when and how the getter value is updated.