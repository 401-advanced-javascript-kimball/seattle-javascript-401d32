# Class 28

## Props!!!!

### Component State 
- `this.state`
  - In labs 27 / 28 we've used state to track a counter variable.
  - We want to consider component state as our source of truth for that components purpose.
  - Only the single component has access to this initially!
    - Pros:
      - Because of this we don't have to justify our state with other components.
      - Other components are free to use whatever they want and not get in the way.
    - Cons:
      - Whatever we do in our component is stuck there.
      - How can we communicate data between other components?

### Component Properties
- `this.props`
  - One way hierarchy of a glimpse into a parent component's state values.
  - Only a parent can pass values down into it's children.
  - By using values placed similar to an attribute, children can see the state contenxt that are above them in the DOM tree. 
