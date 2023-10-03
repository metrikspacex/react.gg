# When rendering a list in JSX, make sure to give each item a unique key so that React can keep track of which items it needs to update.

```
const skills = ["nunchucks", "bow hunting", "computer hacking"]

function Skills() {
  return (
    <ul>
      {skills.map((skill) => {
        return <li key={skill}>{skill}</li>;
      })}
    </ul>
  );
}
```
