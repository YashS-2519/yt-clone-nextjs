import { VideoCard } from "./VideoCard";

const VIDEOS = [
  {
    thumbnail: "https://cdn.neowin.com/news/images/uploaded/2024/08/1723555868_youtube-logo.jpg",
    authorImage: "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-youtube-circle-512.png",
    title: "Jawan | Shah Rukh Khan",
    author: "T Series",
    views: "1.2M views",
    timestamp: "2 days ago",
  },
  {
    thumbnail: "https://cdn.neowin.com/news/images/uploaded/2024/08/1723555868_youtube-logo.jpg",
    authorImage: "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-youtube-circle-512.png",
    title: "Jawan | Shah Rukh Khan",
    author: "T Series",
    views: "1.2M views",
    timestamp: "2 days ago",
  },
  {
    thumbnail: "https://cdn.neowin.com/news/images/uploaded/2024/08/1723555868_youtube-logo.jpg",
    authorImage: "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-youtube-circle-512.png",
    title: "Jawan | Shah Rukh Khan",
    author: "T Series",
    views: "1.2M views",
    timestamp: "2 days ago",
  },
  {
    thumbnail: "https://cdn.neowin.com/news/images/uploaded/2024/08/1723555868_youtube-logo.jpg",
    authorImage: "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-youtube-circle-512.png",
    title: "Jawan | Shah Rukh Khan",
    author: "T Series",
    views: "1.2M views",
    timestamp: "2 days ago",
  },
  {
    thumbnail: "https://cdn.neowin.com/news/images/uploaded/2024/08/1723555868_youtube-logo.jpg",
    authorImage: "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-youtube-circle-512.png",
    title: "Jawan | Shah Rukh Khan",
    author: "T Series",
    views: "1.2M views",
    timestamp: "2 days ago",
  },
  {
    thumbnail: "https://cdn.neowin.com/news/images/uploaded/2024/08/1723555868_youtube-logo.jpg",
    authorImage: "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-youtube-circle-512.png",
    title: "Jawan | Shah Rukh Khan",
    author: "T Series",
    views: "1.2M views",
    timestamp: "2 days ago",
  },
  {
    thumbnail: "https://cdn.neowin.com/news/images/uploaded/2024/08/1723555868_youtube-logo.jpg",
    authorImage: "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-youtube-circle-512.png",
    title: "Jawan | Shah Rukh Khan",
    author: "T Series",
    views: "1.2M views",
    timestamp: "2 days ago",
  },
  {
    thumbnail: "https://cdn.neowin.com/news/images/uploaded/2024/08/1723555868_youtube-logo.jpg",
    authorImage: "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-youtube-circle-512.png",
    title: "Jawan | Shah Rukh Khan",
    author: "T Series",
    views: "1.2M views",
    timestamp: "2 days ago",
  },
  {
    thumbnail: "https://cdn.neowin.com/news/images/uploaded/2024/08/1723555868_youtube-logo.jpg",
    authorImage: "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-youtube-circle-512.png",
    title: "Jawan | Shah Rukh Khan",
    author: "T Series",
    views: "1.2M views",
    timestamp: "2 days ago",
  },
  {
    thumbnail: "https://cdn.neowin.com/news/images/uploaded/2024/08/1723555868_youtube-logo.jpg",
    authorImage: "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-youtube-circle-512.png",
    title: "Jawan | Shah Rukh Khan",
    author: "T Series",
    views: "1.2M views",
    timestamp: "2 days ago",
  },
  {
    thumbnail: "https://cdn.neowin.com/news/images/uploaded/2024/08/1723555868_youtube-logo.jpg",
    authorImage: "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-youtube-circle-512.png",
    title: "Jawan | Shah Rukh Khan",
    author: "T Series",
    views: "1.2M views",
    timestamp: "2 days ago",
  },
  {
    thumbnail: "https://cdn.neowin.com/news/images/uploaded/2024/08/1723555868_youtube-logo.jpg",
    authorImage: "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-youtube-circle-512.png",
    title: "Jawan | Shah Rukh Khan",
    author: "T Series",
    views: "1.2M views",
    timestamp: "2 days ago",
  },
];

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-2">
      {VIDEOS.map((video, index) => (
        <VideoCard
          key={index}
          thumbnail={video.thumbnail}
          authorImage={video.authorImage}
          title={video.title}
          author={video.author}
          views={video.views}
          timestamp={video.timestamp}
        />
      ))}
    </div>
  );
};
