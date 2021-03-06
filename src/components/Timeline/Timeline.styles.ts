import styled, { css, DefaultTheme } from 'styled-components'

import { Tag as TagType } from '.'

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  max-height: 70rem;
  overflow: auto;
`

type LineProps = {
  scrollHeight: number
}

export const Line = styled.div<LineProps>`
  ${({ theme, scrollHeight }) => css`
    border: 1px solid ${theme.colors.primary};
    height: ${scrollHeight}px;
    position: absolute;
    left: 47px;
  `}
`

export const Year = styled.time`
  ${({ theme }) => css`
    margin-right: 1.4rem;
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.primary};

    &::after {
      content: '';
      position: absolute;
      border-radius: 50%;
      left: 4rem;
      top: 2px;
      width: ${theme.spacings.xsmall};
      height: ${theme.spacings.xsmall};
      background: ${theme.colors.primary};
    }
  `}
`

export const YearGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const YearEventsBox = styled.div`
  display: grid;
  grid-template-areas: 'year event';
  grid-template-columns: 64px auto;
`

export const YearColumn = styled.div`
  display: grid;
  grid-area: year;
  position: relative;
`

export const EventsColumn = styled.div`
  display: grid;
  grid-area: event;
  margin-top: 20px;
`

export const Event = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    margin-bottom: ${theme.spacings.small};
    padding-right: ${theme.spacings.xsmall};

    &::after {
      content: '';
      position: absolute;
      left: -15px;
      width: 12px;
      height: 1px;
      background: linear-gradient(
        to right,
        ${theme.colors.primary},
        rgba(40, 245, 190, 0)
      );
      top: 47px;
    }
  `}
`

const tagModifiers = {
  education: (theme: DefaultTheme) => css`
    background: ${theme.colors.red};
  `,
  event: (theme: DefaultTheme) => css`
    background: ${theme.colors.pink};
  `,
  professional: (theme: DefaultTheme) => css`
    background: ${theme.colors.blue};
  `,
  talk: (theme: DefaultTheme) => css`
    background: ${theme.colors.purple};
  `,
  academic: (theme: DefaultTheme) => css`
    background: ${theme.colors.green};
  `
}

type TagProps = {
  type: TagType
}

export const Tag = styled.div<TagProps>`
  ${({ theme, type }) => css`
    border-radius: 12px;
    display: inline-block;
    padding: 4px 8px;

    font-weight: ${theme.font.bold};
    font-size: 12px;
    color: ${theme.colors.white};

    ${!!type && tagModifiers[type](theme)};
  `}
`

export const Title = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    flex: 1;
  `}
`

export const Date = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin-left: ${theme.spacings.xsmall};
    font-size: 12px;
    display: flex;
    align-self: flex-start;
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    font-size: 14px;
    letter-spacing: -0.01em;
    color: ${theme.colors.black04};
    padding-left: 0.8rem;
  `}
`

export const Flex = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: ${theme.spacings.xxsmall} 0;
    align-items: center;
  `}
`
