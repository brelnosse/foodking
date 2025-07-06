import styled from "styled-components"
import { colors } from "../../utils/style/colors"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fas } from "@fortawesome/free-solid-svg-icons"
import GobackBtn from "../../components/GobackBtn"

const StyledContainer = styled.div`
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 80vh;
    justify-content: center;
`

const StyledContactCard = styled.div`
    background-color: ${colors.white};
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0px 0px 20px 10px rgba(0,0,0,0.05);
    max-width: 600px;
    width: 100%;
    text-align: center;
`

const StyledTitle = styled.h1`
    color: ${colors.black};
    margin-bottom: 30px;
    font-size: 2.5em;
    font-weight: 300;
`

const StyledSubtitle = styled.h2`
    color: ${colors.primary};
    margin-bottom: 40px;
    font-size: 1.5em;
    font-weight: 400;
`

const StyledContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 30px;
`

const StyledContactItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 15px 20px;
    background-color: ${colors.smokeWhite};
    border-radius: 12px;
    transition: all 0.3s;
    
    &:hover {
        transform: scale(1.01);
        box-shadow: 0px 5px 15px rgba(0,0,0,0.02);
    }
`

const StyledIcon = styled.div`
    color: ${colors.primary};
    font-size: 1.3em;
    margin-right: 15px;
    min-width: 30px;
`

const StyledContactText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const StyledLabel = styled.span`
    font-size: 0.9em;
    color: ${colors.borderColor};
    font-weight: 500;
    margin-bottom: 2px;
`

const StyledValue = styled.span`
    font-size: 1.1em;
    color: ${colors.black};
    font-weight: 400;
`

const StyledLink = styled.a`
    color: ${colors.black};
    text-decoration: none;
    transition: color 0.3s;
    
    &:hover {
        color: ${colors.primary};
    }
`

const StyledDescription = styled.p`
    color: ${colors.borderColor};
    font-size: 1em;
    line-height: 1.6;
    margin-top: 20px;
    font-style: italic;
`

function Contact() {
  return (
    <div>
      <GobackBtn />
      <StyledContainer>
        <StyledContactCard>
          <StyledTitle>Contact</StyledTitle>
          <StyledSubtitle>Développeur de l'application</StyledSubtitle>

          <StyledContactInfo>
            <StyledContactItem>
              <StyledIcon>
                <FontAwesomeIcon icon={fas.faUser} />
              </StyledIcon>
              <StyledContactText>
                <StyledLabel>Nom complet</StyledLabel>
                <StyledValue>NOSSE KENNE Brel</StyledValue>
              </StyledContactText>
            </StyledContactItem>

            <StyledContactItem>
              <StyledIcon>
                <FontAwesomeIcon icon={fas.faEnvelope} />
              </StyledIcon>
              <StyledContactText>
                <StyledLabel>Adresse e-mail</StyledLabel>
                <StyledValue>
                  <StyledLink href="mailto:brelnosse2@gmail.com">brelnosse2@gmail.com</StyledLink>
                </StyledValue>
              </StyledContactText>
            </StyledContactItem>

            <StyledContactItem>
              <StyledIcon>
                <FontAwesomeIcon icon={fas.faPhone} />
              </StyledIcon>
              <StyledContactText>
                <StyledLabel>Numéro de téléphone</StyledLabel>
                <StyledValue>
                  <StyledLink href="tel:+237676144352">+237 676144352</StyledLink>
                </StyledValue>
              </StyledContactText>
            </StyledContactItem>

            <StyledContactItem>
              <StyledIcon>
                <FontAwesomeIcon icon={fas.faGraduationCap} />
              </StyledIcon>
              <StyledContactText>
                <StyledLabel>Profession</StyledLabel>
                <StyledValue>Étudiant</StyledValue>
              </StyledContactText>
            </StyledContactItem>
          </StyledContactInfo>

          <StyledDescription>
            N'hésitez pas à me contacter pour toute question, suggestion ou amélioration concernant l'application
            FoodKing.
          </StyledDescription>
        </StyledContactCard>
      </StyledContainer>
    </div>
  )
}

export default Contact
