import styled from 'styled-components';

export const CardNewsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
  height: auto;
  margin: 2rem 0;

  a {
    text-decoration: none;
  }

  h2, p {
    padding: 10px 0;
    text-align: justify;
    font-weight: bold;
  }

  h2 {
    font-size: 1rem;
    color: #2A2A2A;
  }

  p {
    color: #666;
    font-size: 0.9rem;
    letter-spacing: 1px;
    line-height: 1.3rem;
    font-weight: normal;
    margin-bottom: 1rem;

    &:hover {
      color: red;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    transition: 0.3s;
    align-items: center;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    flex-direction: column;
    transition: 0.3s;
    width: 100%;
  }
`;

export const NewsItemsCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: auto;
  cursor: pointer;
  margin-bottom: 4rem;
  justify-content: space-between;
  border-radius: 5px;
  background-color: #fff;
  padding: 1rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  transition: 0.3s;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    flex-direction: column;
    transition: 0.3s;
    width: 100%;
    height: auto;
  }

  @media (min-width: 1025px) and (max-width: 1224px) {
    flex-direction: column;
    transition: 0.3s;
    width: 45%;
    gap: 1rem;
    height: auto;
  }
`;

export const NewsItemsImage = styled.img`
  width: 100%;
  height: 220px;

  @media (max-width: 768px) {
    height: auto;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    flex-direction: column;
    transition: 0.3s;
    width: 100%;
    height: auto;
  }
`;

export const NewsItemsInfos = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    transition: 0.3s;
    width: 100%;
    height: auto;
    jutify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

export const ButtonFavorite = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const LoadMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const ButtonLoadMore = styled.button`
  width: 30%;
  height: 2.5rem;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    background-color: #000;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
