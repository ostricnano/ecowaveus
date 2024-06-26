import React from 'react'
import { FaStar } from "react-icons/fa";
import styled from 'styled-components'
import './ReviewCard.css'

interface ReviewProps {
  firstName: string;
  lastName: string;
  title: string;
  description: string;
  score: number;
  createdAt?: string;
}

export const ReviewCard: React.FC<ReviewProps> = ({
  firstName,
  lastName,
  title,
  description,
  score,
  createdAt
}) => {
  return (
    <CardWrapper className='scrollable-cards'>
      <Nametext>{`${firstName} ${lastName}`}</Nametext>
      <DateText>{createdAt}</DateText>
      {
        title.length > 0 && <ReviewTitle>{title}</ReviewTitle>
      }
      <TextContainer>
        <Reviewtext>{description}</Reviewtext>
      </TextContainer>
        <StarsWrapper>
          {
            Array(5).fill('').map((_, index) => {
              if (index < score) {
                return <FaStar key={index} color='#FFD80A' size={18}  />
              }
              return <FaStar key={index} color='#8A8632' size={18} />
            })
          }
        </StarsWrapper>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 280px;
  height: 420px;
  padding: 1.5rem;
  border-radius: 20px;
  background-color: #FFF;
  whiteSpace: pre-line;
  @media (max-width: 480px) {
    width: 95%;
  }
`;

const TextContainer = styled.div`
  height: 80%;
  width: 100%;
  overflow-y: auto;
  margin: 1rem 0;
  padding: 1rem 0;
  whiteSpace: pre-line;

`;
const Nametext = styled.h3`
  color: #343434;
  font-family: "Be Vietnam Pro";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 140% */
  letter-spacing: -0.05px;
  margin-bottom: 1rem;
  border-bottom: 2px solid #E5E5E5;
  width: 100%;

`;
const DateText = styled.p`
  color: #969696;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.035px;
`;
const ReviewTitle = styled.p`
  color: #343434;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.045px;

`;
const Reviewtext = styled.p`
  color: #343434;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
  letter-spacing: -0.05px;

  white-space: pre-wrap;
  
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
const StarsWrapper = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
`;
