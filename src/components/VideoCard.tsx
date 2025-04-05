export function VideoCard(props: any) {
  return (
    <div className="pb-2">

      <img
        className="rounded-xl p-2 cursor-pointer"
        src={props.thumbnail}
        alt=""
      />

      <div className="grid grid-cols-12 pt-3 px-2">

        <div className="col-span-2">
          <img
            className="rounded-full w-10 h-10 cursor-pointer"
            src={props.authorImage}
            alt=""
          />
        </div>

        <div className="col-span-10 pl-2">

          <div className="cursor-pointer">{props.title}</div>
          <div className="col-span-11 text-gray-400 text-base cursor-pointer">{props.author}</div>
          <div className="col-span-11 text-gray-400 text-base cursor-pointer">{props.views} views | {props.timestamp}</div>

        </div>

      </div>

    </div>
  );
}
