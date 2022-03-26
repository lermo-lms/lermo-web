import { Card, Button, Row, Col } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import Style from './style';

const { Meta } = Card;

const ClassroomCard = ({ id, name, description, classType, banner, onClick }) => {
  let CoverComponent = (
    <div onClick={onClick} className="not-found">
      {name}
    </div>
  );

  if (banner) {
    CoverComponent = <Image alt="banner" src={banner} layout="fill" objectFit="cover" />;
  }

  return (
    <Style>
      <Card
        className="video-card material"
        cover={<div className="video-thumbnail">{CoverComponent}</div>}
        onClick={onClick}
        actions={[
          <div style={{ padding: 15 }}>
            <Link href={`/classroom/${id}`}>
              <a>
                <Button block type="primary">
                  Join Group
                </Button>
              </a>
            </Link>
          </div>,
        ]}
      >
        <Meta title={name} description={description} />
      </Card>
    </Style>
  );
};

export default ClassroomCard;
