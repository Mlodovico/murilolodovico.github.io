import React, { useEffect, useRef } from 'react';
import { AiOutlineInstagram, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import { Link, animateScroll as scroll } from 'react-scroll';
import lottie from  'lottie-web';

import { 
  Container, 
  Header, 
  BoxFetch, 
  Title, 
  Subtitle, 
  Paragraph, 
  ContainerText, 
  Footer, 
  FooterText,
  Name,
  AvatarImage
} from './styles/styles';

function App() {
  
  const lottiefile1 =useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: lottiefile1.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../files/18123-developer.json')
    });
  });

  return (
    <Container>
      <Header>
        <button>Resumo</button>
        <button>Experiências</button>
        <button>Estudos</button>
        <button>Contato</button>
        <div>
          <AvatarImage>
            <image src={require('../files/avatarProfile.jpg')} />
          </AvatarImage>
          <Name>Murilo Lodovico</Name>
        </div>
      </Header>
      
      <BoxFetch>
        <ContainerText>
          <Title>Desenvolvedor de Software</Title>
          <div className="lottie1" ref={lottiefile1} />
          <Subtitle>Resumo</Subtitle>
            <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipiscing elit tempus, 
              vulputate velit et vehicula nunc auctor suspendisse felis, 
              ornare potenti sodales at dui lobortis leo.
               Montes potenti congue ipsum vehicula habitant tincidunt mollis rhoncus odio iaculis, 
              orci lectus tortor volutpat ante blandit neque dictum efficitur, 
              penatibus primis pulvinar facilisi parturient tempus vivamus placerat suscipit.
               Velit platea conubia sem curabitur mauris curae 
             </Paragraph>
            <Subtitle>Experiências</Subtitle>
        </ContainerText>
      </BoxFetch>
      <Footer>
        <FooterText>
          <AiOutlineInstagram />
          mlodovico
        </FooterText>
        <FooterText>
          <AiFillLinkedin />
          Murilo Lodovico
        </FooterText>
        <FooterText>
          <AiOutlineMail />
          murilo.lodovico@outlook.com
        </FooterText>
      </Footer>
    </Container>
  );
}

export default App;
