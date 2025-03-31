export function VideoCard(props: any) {
  return (
    <div>

      <img
        className="rounded-xl p-2"
        src={props.thumbnail}
        alt=""
      />

      <div className="grid grid-cols-12 pt-3">

        <div className="col-span-1">
          <img
            className="rounded-full w-13 h-13"
            src={props.authorImage}
            alt=""
          />
        </div>

        <div className="col-span-11 pl-2">

          <div>{props.title}</div>
          <div className="col-span-11 text-gray-400 text-base">{props.author}</div>
          <div className="col-span-11 text-gray-400 text-base">{props.views} views | {props.timestamp}</div>

        </div>

      </div>

    </div>
  );
}
