import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import { Col, Row } from 'antd';

import ClassroomCard from '@components/molecules/classroomCard';
import withAuth from '@components/templates/withAuth';
import { UserSideMenuTemplate } from '@components/templates/user';
import NewClassroomButton from '@components/organisms/newClassroomButton';
import classroomActions from '@redux/classroom/actions';

import Style from './style';

const { get_classrooms } = classroomActions;

const Classroom = () => {
  const dispatch = useDispatch();

  const { classrooms } = useSelector((state) => ({
    classrooms: state.Classroom.get('classrooms'),
  }));

  useEffect(() => {
    dispatch(get_classrooms());
  }, []);

  return (
    <Style>
      <Head>
        <title>Lermo - Classroom</title>
      </Head>
      <Row className="user-container container">
        <Col span={24}>
          <h1>Suggest for you</h1>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            {classrooms.map((val, i) => (
              <Col xs={24} sm={12} md={8} xl={8} key={i}>
                <ClassroomCard
                  id={val._id}
                  name={val.name}
                  description={val.description}
                  classType={val.type}
                  // banner={val.banner}

                  // onClick={() => {
                  //   onClick(video);
                  // }}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <NewClassroomButton />
    </Style>
  );
};

export default withAuth(UserSideMenuTemplate, Classroom);
