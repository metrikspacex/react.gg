# If you want to return more than one element, you need to wrap the content in a Fragment which allows JSX to have a single element, but won't get rendered into the DOM.

# There are two ways to do this. Either use the React.Fragment element or alternatively you can use the shorthand syntax, <></>.

```
function Welcome() {
  return (
    <React.Fragment>
      <h1>Hello!</h1>
      <h2>World</h2>
    </React.Fragment>
  )
}
```

```
function Welcome() {
  return (
    <>
      <h1>Hello!</h1>
      <h2>World</h2>
    </>
  )
}
```
