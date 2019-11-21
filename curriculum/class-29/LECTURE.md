# Class 29

## Review

- contextual this:
  
```jsx
class MyComponent extends React.Component {
  constructor() {
    // this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit = (e) => {
    e.preventDefault();
    callAPI();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

      </form>
    )
  }
}
```

## Routing and Component Composition

- When access browser files we use a path to a specific file:
  - `www.jacob.com/info/about-me`
  - we still want to include data about our app state in our URL.
  - But we have a problem:
    - Single page apps don't need to trab other html files.
  - How can we bake our app state into our url, and have things work in React?
    - We can conditionally render stuff using our url:

```jsx

const RenderIf = (props) => props.condition ? props.children : null

// In another file:

return (
  <RenderIf condition={document.location.pathname.includes('about-me;')}>
    <AboutMe/>
  </RenderIf>

)
```

### Welcome our react-router

```jsx
<Route path="/about-me" component={AboutMe}/>
```
