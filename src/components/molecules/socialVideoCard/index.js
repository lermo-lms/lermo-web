import {
  Card,
  Avatar,
} from 'antd';
import Image from 'next/image';

import Style from './style';

const { Meta } = Card;

const SocialVideoCard = ({
  videoThumbnail, videoTitle, username, onClick,
  userAvatar, videoDuration,
}) => {
  let ThumbnailComponent = <div onClick={onClick} className="not-found">Coming soon</div>;
  if (videoThumbnail) {
    // ThumbnailComponent = (
    //   <Image
    //     alt="video_thumbnail"
    //     src={videoThumbnail}
    //     layout="fill"
    //     objectFit="cover"
    //   />
    // );
    ThumbnailComponent = (
      <img
        alt="video_thumbnail"
        src={videoThumbnail}
      />
    );
  }
  return (
    <Style>
      <Card
        className="video-card material"
        cover={(
          <div className="video-thumbnail">
            {ThumbnailComponent}
          </div>
        )}
        onClick={onClick}
      >
        <div className="duration">
          {videoDuration}m
        </div>

        <Meta
          title={videoTitle}
        />
        <Meta
          avatar={<Avatar src={userAvatar} />}
          description={username}
        />
      </Card>
    </Style>
  );
};

export default SocialVideoCard;
