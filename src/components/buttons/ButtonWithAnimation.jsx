import React from "react"
import * as S from "./styles/ButtonWithAnimation.style"
import { ChevronRight } from "../../assets/icons"

const ButtonWithAnimation = ({ text, black, href = null, onClick }) => {
  return (
    <S.Container onClick={onClick} href={href}>
      <S.ChevronContainer black={black}>
        <ChevronRight />
      </S.ChevronContainer>
      <S.TextContainer black={black}>
        <div>{text || "Read More"}</div>
      </S.TextContainer>
    </S.Container>
  )
}

export default ButtonWithAnimation
