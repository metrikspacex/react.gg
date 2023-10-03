import clsx from "clsx";

function Badge() {
  return (
    <div className={clsx("badge")}>
      <img alt="" src={null} />
      <div>
        <h4>NAME</h4>
        <p>@HANDLE</p>
      </div>
    </div>
  );
}

export default function Complete() {
  return (
    <Badge
      handle="tylermcginnis"
      img="https://avatars0.githubusercontent.com/u/2933430"
      name="Tyler McGinnis"
    />
  );
}
