import clsx from "clsx";

/*

We have a Badge component with variables for name, handle and img that are unassigned.Your job is to assign those variables in the JSX so that the component renders correctly.

Tasks
1.   Give the image a proper alt tag using the author's name
2.   Make sure the badge displays the profile image correctly
3.   Display the author's name in the badge's heading
4.   Display the author's handle below the heading

*/
export default function Starter() {
  const handle = "tylermcginnis";
  const img = "https://avatars0.githubusercontent.com/u/2933430";
  const name = "Tyler McGinnis";

  return (
    <div
      className={clsx(
        "bg-charcoal border-beige-10 m-[0_auto] flex w-[30rem] flex-col items-center gap-[1.6rem] rounded-[0.8rem] border-[0.1rem] border-solid p-[2.4rem] text-center"
      )}>
      <img
        alt=" "
        className={clsx("h-[20rem] w-[20rem] rounded-[50%]")}
        src=""
      />
      <div className={clsx("")}>
        <h4
          className={clsx(
            "font-primary text-beige m-[0.5rem] text-[1.4rem] font-bold not-italic leading-normal tracking-normal"
          )}>
          NAME
        </h4>
        <p
          className={clsx(
            "font-primary text-beige m-[0.5rem] text-[1.4rem] font-normal not-italic leading-normal tracking-normal opacity-75"
          )}>
          @HANDLE
        </p>
      </div>
    </div>
  );
}
