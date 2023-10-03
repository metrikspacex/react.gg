# JSX supports "early return" statements, which means you can use if statements to return the UI if a condition is met.

```
function App() {
  const now = Date.now();
  const hour = now.getHours();

  if(hour < 12) {
    return <p>Good morning!</p>
  }

  return <p>Good afternoon!</p>
}
```
