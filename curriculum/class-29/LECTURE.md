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

### Building Complex Apps

- Our apps are going to start to be filled with manhy more components
- We need to plan out how are apps are composed:
  - What is the pupose of my component?
    - Display Data? What data does it need, from where
    - Collecting from data? What sort of data does it need?
    - Fetching from an API? When?
    - Toggling / changing component state?
  - What is our App hierarchy?
    - Is there any data that children data depend on?
    - What's the relationship between children?
  - Helps to think of your components as "Card" in a "Deck".