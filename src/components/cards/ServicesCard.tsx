import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

interface CardProps {
  title: string;
  content: string;
  url: string;
  icon?: string;
}

export const ServicesCard: React.FC<CardProps> = ({
  title,
  content,
  icon,
  url,
}) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <Link to={url}>
      <CardContainer onClick={handleClick}>
        <IconWrapper>
          <Icon src={icon} alt="Protecte cloud" />
        </IconWrapper>
        <div>
          <Title>{title}</Title>
          <Text>{content}</Text>
        </div>
      </CardContainer>
    </Link>
  )
}

const CardContainer = styled.div`
  display: flex;
  width: 276px;
  height: auto;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: #FFFFFF;
  border-radius: 15px;
  border: 1px solid #EAEAEA;
  gap: 24px;
  padding: 32px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 84px;
  flex-shrink: 0;
  border-radius: 15px;
  background-color: rgba(31, 165, 0, 0.10);
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin: 0 10px;
`;

const Title = styled.h3`
  color: #343434;
  font-family: Inter;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 93.75% */
  letter-spacing: -0.408px;
  margin-bottom: 16px;
`;

const Text = styled.p`
  color: rgba(21, 27, 39, 0.70);
  font-family: Roboto;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 170%; /* 34px */
  letter-spacing: -0.408px;
`;
