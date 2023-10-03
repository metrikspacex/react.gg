import clsx from "clsx";

export default function Complete() {
  const friends = ["Ben", "Lynn", "Alex"];
  return (
    <ul className={clsx("friends-list")}>
      {friends.map((item, index) => {
        return <li key={`rendering-list-no-keys-${index}`}>{item}</li>;
      })}
    </ul>
  );
}
