import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
} from 'swiper/core';
import { RightCircleFilled, LeftCircleFilled } from '@ant-design/icons';

import AvatarTeacher from '@components/molecules/avatarTeacher';
import userActions from '@redux/user/actions';
import Loading from './loading';
import Style from './style';

SwiperCore.use([Navigation]);

const { get_teachers } = userActions;
const SlideTeachers = () => {
  const dispatch = useDispatch();
  const prevRef = useRef();
  const nextRef = useRef();

  const { teachers } = useSelector((state) => ({
    teachers: state.User.get('teachers'),
  }));

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(get_teachers());
  }, []);

  useEffect(() => {
    if (!teachers) return;
    setIsLoading(false);
  }, [teachers]);

  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <Style>
      <Swiper
        className="customer-swiper-container"
        spaceBetween={24}
        slidesPerView="auto"
        slidesPerGroup={5}
        freeMode
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
        onInit={(e) => {
          e.params.navigation.prevEl = prevRef.current;
          e.params.navigation.nextEl = nextRef.current;
        }}
      >
        {teachers.map((val) => (
          <SwiperSlide style={{ width: 100 }}>
            <AvatarTeacher userId={val._id} avatar={val.avatar} name={val.username} />
          </SwiperSlide>
        ))}
        <div ref={prevRef} className="custom-swiper-btn left-btn"><LeftCircleFilled /></div>
        <div ref={nextRef} className="custom-swiper-btn right-btn"><RightCircleFilled /></div>
      </Swiper>
    </Style>
  );
};

export default SlideTeachers;
