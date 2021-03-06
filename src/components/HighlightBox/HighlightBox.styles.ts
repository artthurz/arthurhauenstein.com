import styled, { css } from 'styled-components'
import media from 'styles/media'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Ellipse = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%231bb3e0' stroke-width='2' stroke-dasharray='8' stroke-dashoffset='71' stroke-linecap='butt'/%3e%3c/svg%3e");
    border-radius: 100px;
    width: 8rem;
    height: 8rem;
    min-width: 8rem;
    min-height: 8rem;
    margin-right: ${theme.spacings.xsmall};
    margin-left: ${theme.spacings.small};
    transition: all 0.5s ease;

    &:hover {
      background: ${theme.colors.gradient03};
      transform: rotate(360deg);

      ${PrimaryText} {
        color: ${theme.colors.white};
        transform: scale(1.2);
      }
    }

    ${media.lessThan('hd')`
      width: 7rem;
      height: 7rem;
      min-width: 7rem;
      min-height: 7rem;
    `}

    ${media.lessThan('tablet')`
      width: 6rem;
      height: 6rem;
      min-width: 6rem;
      min-height: 6rem;
    `}
  `}
`

export const PrimaryText = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary01};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    transition: all 0.5s ease;

    ${media.lessThan('tablet')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`

export const SecondaryText = styled.h5`
  ${({ theme }) => css`
    color: ${theme.colors.text03};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.light};

    ${media.lessThan('tablet')`
      font-size: ${theme.font.sizes.small};
    `}
  `}
`
