import {VideoCard} from "@/components/VideoCard";

export default function Home() {
  return (
    <div>
      <VideoCard
        thumbnail={"https://cdn.neowin.com/news/images/uploaded/2024/08/1723555868_youtube-logo.jpg"}
        authorImage={"https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-youtube-circle-512.png"}
        title={"Jawan | Shah Rukh Khan"}
        author={"T Series"}
        views={"1.2M views"}
        timestamp={"2 days ago"}
      />
    </div>
  );
}
