import React, { useEffect, useRef } from 'react';
import lottie from  'lottie-web';

import { Container, Header, BoxFetch, Title, Paragraph, ContainerText } from './styles';

function App() {
  
  const lottiefile1 =useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: lottiefile1.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./files/18123-developer.json')
    });
  });

  return (
    <Container>
      <Header>
        <button>Resumo</button>
        <button>Experiências</button>
        <button>Estudos</button>
      </Header>
      
      <BoxFetch>
        <ContainerText>
          <Title>Desenvolvedor de Software</Title>
          <div className="lottie1" ref={lottiefile1} />



          <Title>Resumo</Title>
            <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipiscing elit tempus, 
              vulputate velit et vehicula nunc auctor suspendisse felis, 
              ornare potenti sodales at dui lobortis leo.
               Montes potenti congue ipsum vehicula habitant tincidunt mollis rhoncus odio iaculis, 
              orci lectus tortor volutpat ante blandit neque dictum efficitur, 
              penatibus primis pulvinar facilisi parturient tempus vivamus placerat suscipit.
               Velit platea conubia sem curabitur mauris curae laoreet congue,
              nostra sociosqu himenaeos dui lectus tempus porta ligula sagittis, 
              placerat sed purus ultricies dignissim pellentesque nam. 
                Fermentum nunc quis aenean porta aptent nostra penatibus adipiscing sed ornare, 
              nibh molestie eros primis tristique senectus tellus cursus eget, 
              quam tempus iaculis sagittis placerat hendrerit nullam sapien congue metus, 
              interdum morbi ridiculus tincidunt laoreet sociosqu phasellus habitasse.
               Ultricies ante quis erat euismod habitasse suspendisse facilisi himenaeos cursus, 
              dignissim venenatis dictumst nibh mauris maximus integer nam mi, 
              netus faucibus quam malesuada laoreet tortor dui duis.
             </Paragraph>
        </ContainerText>
      </BoxFetch>
    </Container>
  );
}

export default App;
