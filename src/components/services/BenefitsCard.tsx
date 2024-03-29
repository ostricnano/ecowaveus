import React from 'react'
import styled from 'styled-components'

interface Props {
    id: number,
    title: string,
    content?: string,
    image?: string,
  }

export const BenefitsCard: React.FC<Props> = ({
    title,
    image
}) => {
  return (
    <>
      <IconCard>
        <ImageWrapper>
          <StyledImage src={image} alt={title} />
        </ImageWrapper>
        <Separator />
        <TextWrapper>
          <IconText>{title}</IconText>
        </TextWrapper>
      </IconCard>
    </>
  )
}

const IconCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 28px;
  height: 105px;
  width: 383px;
  @media (max-width: 768px) {
    width: 90%;
  }

  `;
const Separator = styled.div`
  border-left: 1px solid #D8D8D8;
  height: 90%;
  background-color: #D8D8D8;
`;
  const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 52px;
  `;
  const StyledImage = styled.img`
  width: auto;
  height: 100%;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;
const IconText = styled.p`
  color: #1C1F35;
  font-family: Inter;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;