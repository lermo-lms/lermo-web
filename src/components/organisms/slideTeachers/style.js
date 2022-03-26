import styled from 'styled-components';

export default styled.div`
  border-radius: 24px;
  border: 1px solid #ddd;
  padding: 20px 0px;
  margin: 0px 24px;

  .customer-swiper-container {
    position: relative;
    padding: 0px 20px;

    .custom-swiper-btn {
      position: absolute;
      top: calc(50% - 30px);
      z-index: 1;

      font-size: 40px;
      color: #fff;
      filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.08));
      cursor: pointer;
      transition: .2s all;

      &.left-btn {
        left: 10px;
      }

      &.right-btn {
        right: 10px;
      }

      &:hover {
        filter: drop-shadow(0px 4px 12px #aaa);
      }

      &.swiper-button-disabled {
        opacity: 0.8;
        cursor: default;
        filter: none;
      }
    }

    &.loading {
      display: flex;

      .item {
        margin-right: 24px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    border-radius: 0px;

    .customer-swiper-container .custom-swiper-btn {
      display: none;
    }
  }
`;
