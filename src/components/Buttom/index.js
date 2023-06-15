import React from 'react'
import { ButtomContainer } from './styles';

 function Buttom({onClick}) {
  return (
    <ButtomContainer onClick={onClick}>
        Buscar
    </ButtomContainer>
  )
}

export default Buttom;