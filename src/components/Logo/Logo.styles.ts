import styled, { css } from 'styled-components'
import media from 'styles/media'

import { LogoProps } from '.'

type WrapperProps = LogoProps

const wrapperModifiers = {
  hideOnMobile: () => css`
    ${media.lessThan('tablet')`
      .logo-name {
        display: none;
      }
    `}
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ hideOnMobile }) => css`
    width: 20rem;
    display: flex;
    flex-direction: column;

    ${!!hideOnMobile && wrapperModifiers.hideOnMobile()}
  `}
`
