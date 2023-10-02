# Whenever you want to use an expression in JSX (an expression being a something that produces a value like a variable or a function invocation), you need to wrap the expression in single curly braces, {}.

```
function Welcome {
  const name = 'Tyler';

  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>What is 2 + 2? {2 + 2}</p>
    </div>
  );
}
```
