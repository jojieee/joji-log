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

const Footer = () => {
  const { handleInstagram } = useFooter()
  return (
    <FooterWrapper>
      <ContactWrapper>
        <ContactTitle>Contact Us</ContactTitle>
        <InfoWrapper>
          <ContactInfo>
            <Info>
              <div>ZOZI</div>
              <div>010-9105-3768</div>
              <div>jjw3768@gmail.com</div>
            </Info>
          </ContactInfo>

          <InstagramIcon onClick={handleInstagram} />
        </InfoWrapper>
      </ContactWrapper>
    </FooterWrapper>
  )
}

export default Footer
