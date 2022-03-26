import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tag from '@components/atoms/tag';
import categoryActions from '@redux/category/actions';
import Loading from './loading';
import Style from './style';

const { get_categories } = categoryActions;

const CategoryTags = () => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => ({
    categories: state.Category.get('categories'),
  }));

  const [isLoading, setIsLoading] = useState(true);

  const title = 'Topics';

  useEffect(() => {
    dispatch(get_categories());
  }, []);

  useEffect(() => {
    if (!categories) return;
    setIsLoading(false);
  }, [categories]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Style>
      <h1>{title}</h1>
      <div className="section">
        {categories.map((val) => <Tag className="cate-item" type="category" key={val}>{val}</Tag>)}
      </div>
    </Style>
  );
};

export default CategoryTags;
