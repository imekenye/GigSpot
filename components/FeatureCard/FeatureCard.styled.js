import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 156px;
  width: 100%;
`;
export const ImageWrapper = styled.div`
  width: 170px;
  height: 100%;
  overflow: hidden;
`;
export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
export const Details = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
  border: 1px solid white;
  padding: 16px;
  width: 100%;
  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 70%;
  }

  .right {
    text-align: center;
    width: 30%;
    p {
      font-size: 72px;

      span {
        font-size: 15px;
        display: block;
      }
    }
  }
`;
export const Title = styled.h2``;
export const Location = styled.p``;
export const Time = styled.p``;
export const Date = styled.p``;
