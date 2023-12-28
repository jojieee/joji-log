import {
  FooterWrapper,
  ContactWrapper,
  ContactTitle,
  ContactInfo,
  InfoWrapper,
  Info,
  InstagramIcon
} from './FooterStyle'
import useFooter from './useFooter'
import { ownerInfoData } from '@/lib/ownerInfoData'

const Footer = () => {
  const { handleInstagram } = useFooter()
  return (
    <FooterWrapper>
      <ContactWrapper>
        <ContactTitle>Contact Us</ContactTitle>
        <InfoWrapper>
          <ContactInfo>
            {ownerInfoData.map((val, idx) => (
              <Info key={idx}>
                <div>{val.name}</div>
                <div>{val.phone}</div>
                <div>{val.email}</div>
                <div>{val.address}</div>
                {/* <div>{val.bank}</div> */}
              </Info>
            ))}
          </ContactInfo>

          <InstagramIcon onClick={handleInstagram} />
        </InfoWrapper>
      </ContactWrapper>
    </FooterWrapper>
  )
}

export default Footer
