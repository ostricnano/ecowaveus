import React from 'react'
import { FaStar } from "react-icons/fa";
import styled from 'styled-components'

interface TotalReviewsProps {
  title: string
  description: string
}
export const TotalReviews: React.FC<TotalReviewsProps> = ({
  title,
  description
}) => {
  return (
    <CardWrapper>
      <StarsWrapper>
        <FaStar color='#4e9d40' size={32} />
        <FaStar color='#4e9d40' size={32} />
        <FaStar color='#4e9d40' size={32} />
        <FaStar color='#4e9d40' size={32} />
        <FaStar color='#4e9d40' size={32} />
      </StarsWrapper>
      <ReviewTitle>{title}</ReviewTitle>
      <ReviewDescription>{description}</ReviewDescription>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  width: 380px;
  height: auto;
  background-color: #1b5b8d;
  padding: 1rem;
  margin: 1rem;
  border-radius: 0 8px 8px 0;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.5s ease-in-out;
  }
  @media (max-width: 1240px) {
    width: 100%;
    height:auto;
  }
  @media (max-width: 768px) {
    border-radius: 8px;
  }
`;
const StarsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 1rem;
  gap: 0.5rem;
`
const ReviewTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`
const ReviewDescription = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
`
