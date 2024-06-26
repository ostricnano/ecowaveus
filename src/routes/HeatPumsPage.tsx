import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ServiceBenefits } from "../components/services/ServiceBenefits";
import { OursBrands } from "../components/brands/OursBrands";
import { ProccesCard } from "../components/services/ProccesCard";
import { RebatesIncentives } from "../components/services/RebatesIncentives";
import { MainPageComponent } from "../components/pagesComponents/MainPageComponent";
import { Helmet } from "react-helmet";

export const HeatPumsPage = () => {
  const location = useLocation();
  const pathLocation = location.pathname;

  const stepByStepList = [
    {
      id: 1,
      item: "01",
      title: "Contact Us ",
      content: "Contact us to discuss your project and schedule an appointment",
    },
    {
      id: 2,
      item: "02",
      title: "Get a FREE Estimate",
      content:
        "Receive a free estimate and information on rebates and financing (including Mass Save 0% HEAT loan if applicable) - We will inform you and help you through the process",
    },
    {
      id: 3,
      item: "03",
      title: "Contract and Schedule",
      content: "Sign the contract and schedule the installation",
    },
    {
      id: 4,
      item: "04",
      title: "Complete Installation",
      content: "Proceed with the heat pump installation ",
    },
    {
      id: 5,
      item: "05",
      title: "Rebates and Incentives Forms",
      content: "We will help you to apply for rebates - ",
      span: "Enjoy your new system!",
    },
  ];

  return (
    <StyledPage
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>Electric Heat Pumps near Peabody, MA | Heat Pump Services</title>
        <meta
          name="description"
          content="Searching for an electric heat pump installation nearby? We provide renewable energy and heat pumps for sale. Call EcoWave at 978-500-4081 and request a quote."
        />
      </Helmet>
      <MainPageComponent
        title="Efficient Heating and Cooling for Your Home"
        subtitle="Efficient and Eco-Friendly:"
        content="A heat pump efficiently transfers heat from one place to another using electricity, rather than generating heat directly. It operates at a remarkable 300% efficiency, delivering three times the heat for each unit of energy used, by harnessing solar energy. This makes it an eco-friendly and cost-effective alternative to traditional heating sources like oil or gas."
        pathLocation={pathLocation}
        backgroundImage="/images/heat-pumps.jpg"
      />
      <ServiceBenefits
        title="Benefits of Heat Pumps"
        subTitle="Maximizing Comfort and Efficiency"
      />
      <ImageBrackground>
        <StyledImage
          src="/images/heat-pumps-list-background.png"
          alt="heatpumps-background"
        />
      </ImageBrackground>
      <ProccesComponent>
        <SubTitle>Installation Guide</SubTitle>
        <TitleProcces>Installation Process</TitleProcces>
        <TextProcces>We make it easy for you!</TextProcces>
        <ProccesGridContainer>
          <ProccesCardWrapper>
            {stepByStepList.map((item) => (
              <ProccesCard
                key={item.id}
                id={item.id}
                title={item.title}
                content={item.content}
                item={item.item}
                span={item.span}
              />
            ))}
          </ProccesCardWrapper>
          <ImageWrapper>
            <Image src="/images/heat-pumps-list01.png" alt="heat pumpp" />
          </ImageWrapper>
        </ProccesGridContainer>
      </ProccesComponent>
      <RebatesIncentives>
        {/* <LinkWrapper>
            <Text>
              Check if your city is eligible:
            </Text>
            <Link to='https://frontdoor.portal.poweredbyefi.org/initiative/marebates'>
              <LinkText>
                https://frontdoor.portal.poweredbyefi.org/initiative/marebates
              </LinkText>
            </Link>
          </LinkWrapper> */}
        <Text>
          Whole-home rebates are available to customers who install heat pumps
          as the sole source of heating and cooling (up to $10,000).
        </Text>
        <Text>
          Partial-home rebates are offered based on equipment or outdoor unit
          (tonnage) to customers who plan to keep an existing boiler or furnace
          in place to supplement a new heat pump system ($1,250 per ton, up to
          $10,000).
        </Text>
        <IncentivesTitle>Federal Incentives</IncentivesTitle>
        <Text>
          Federal tax credit 30% of the cost of the installation up to $2,000
        </Text>
      </RebatesIncentives>
      <BrandsWrapper>
        <OursBrands
          images={[
            "/images/brands/mitsubishi-logo.png",
            "/images/brands/fujitsu-logo.png",
            "/images/brands/daikin-logo.png",
            "/images/brands/bosch-logo.png",
          ]}
        />
      </BrandsWrapper>
    </StyledPage>
  );
};

const StyledPage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 100px;
`;

const Text = styled.p`
  color: #fff;

  font-family: Roboto;
  font-size: 1.5rem;
  font-style: normal;
  line-height: 1.8rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const ImageBrackground = styled.div`
  width: 100%;
  height: 100%;
`;
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProccesComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 75%;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 3rem;
  margin-top: -7rem;
  margin-bottom: 8rem;
  @media (max-width: 1024px) {
    width: 90%;
    align-items: center;
    margin-top: -3rem;
  }
`;
const ProccesCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 60%;
  @media (max-width: 1024px) {
    width: 100%;
    justify-content: center;
  }
`;
const ProccesGridContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;
`;
const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  @media (max-width: 1024px) {
    display: none;
  }
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 16px;
`;
const SubTitle = styled.p`
  color: #1c1f35;

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-left: 4px solid #68be54;
  background: rgba(232, 232, 232, 0.5);
  padding: 3px 9px 3px 8px;
  margin-bottom: 0.5rem;
  align-self: flex-start;
`;
const TitleProcces = styled.h3`
  color: #1c1f35;
  font-family: Inter;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 0.5rem;
`;
const TextProcces = styled.p`
  color: #666c89;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 151.523%; /* 36.365px */
`;

const BrandsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #fff;
`;

const IncentivesTitle = styled.h5`
  color: var(--White, var(--fore-allways---white, #fff));
  text-align: center;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  margin-top: 3rem;
`;
