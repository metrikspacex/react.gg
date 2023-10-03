# When conditionally rendering in JSX, you can use JavaScript's ternary operator.

```
function App() {
  const now = Date.now();
  const hour = now.getHours();

  return hour < 12 ? <p>Good morning!</p> : <p>Good afternoon!</p>;
}
```
