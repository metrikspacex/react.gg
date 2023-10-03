import clsx from "clsx";

export default function Complete() {
  const friends = [
    { id: 893, name: "Lynn" },
    { id: 871, name: "Alex" },
    { id: 982, name: "Ben" },
    { id: 61, name: "Mikenzi" },
  ];

  return (
    <ul className={clsx("friends-list")}>
      {friends.map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );
}
