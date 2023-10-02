import clsx from "clsx";

export default function Complete() {
  const handle = "tylermcginnis";
  const img = "https://avatars0.githubusercontent.com/u/2933430";
  const name = "Tyler McGinnis";

  return (
    <div
      className={clsx(
        "bg-charcoal border-beige-10 m-[0_auto] flex w-[30rem] flex-col items-center gap-[1.6rem] rounded-[0.8rem] border-[0.1rem] border-solid p-[2.4rem] text-center"
      )}>
      <img
        alt={name}
        className={clsx("h-[20rem] w-[20rem] rounded-[50%]")}
        src={img}
      />
      <div className={clsx("")}>
        <h4
          className={clsx(
            "font-primary text-beige m-[0.5rem] text-[1.4rem] font-bold not-italic leading-normal tracking-normal"
          )}>
          {name}
        </h4>
        <p
          className={clsx(
            "font-primary text-beige m-[0.5rem] text-[1.4rem] font-normal not-italic leading-normal tracking-normal opacity-75"
          )}>
          @{handle}
        </p>
      </div>
    </div>
  );
}
