# In JSX, your function must always return a single element. This is fine.

```
function Welcome() {
  return <h1>Hello!</h1>
}
```

# This isn't.
```
function Welcome() {
  return (
    <h1>Hello!</h1>
    <h2>World</h2>
  )
}
```
