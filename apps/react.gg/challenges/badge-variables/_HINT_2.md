# It's OK to mix static and dynamic content in JSX. In the example below, "Today is" is static while our function invocation is dynamic.

```
function Date() {
  return (
    <p>
      Today is {new Date().toLocaleDateString()}
    </p>
  );
}
```
