const ThemeStatic = {
  type: 'dark',
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    medium: 700,
    bold: 900,
    sizes: {
      xxsmall: '0.8rem',
      xsmall: '1rem',
      msmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      mediumlarge: '2rem',
      large: '2.4rem',
      xlarge: '3.2rem',
      xxlarge: '4.2rem',
      xxxlarge: '5rem'
    }
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
    xxxlarge: '10rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
}

const DarkTheme = {
  ...ThemeStatic,
  type: 'dark',
  colors: {
    background: 'rgb(16, 18, 18)',
    background02: 'rgb(20, 24, 26)',
    text: '#e1e1e6',
    text02: '#ffffff',
    text03: '#ffffff',
    red: '#D92E3F',
    primary: 'rgb(64, 203, 246)',
    primary01: '#5fc9e9',
    primary02: '#a3e0f2',
    black: '#1F1F24',
    black01: '#27272D',
    black02: '#35353D',
    black03: '#484854',
    black04: '#737380',
    purple: '#6321CE',
    pink: '#FF3773',
    blue: '#3B37FF',
    green: '#1BE0AB',
    gradient01:
      'linear-gradient(270.03deg, #3B37FF 0.05%, rgba(59, 55, 255, 0) 98.15%)',
    gradient02:
      'linear-gradient(265.22deg, #5fc9e9 -1.83%, rgba(40, 245, 190, 0) 95.01%)',
    gradient03: `linear-gradient(45deg,
        rgb(64, 203, 246),
        rgb(130, 192, 65)
      )`,
    gradient04: 'linear-gradient(333.93deg, #2f2f2f 0%, #35353D 100%)',
    gradient05: 'linear-gradient(rgb(20, 24, 25), rgba(29, 41, 45, 0.4))',
    textGradient: `-webkit-linear-gradient(
        45deg,
        rgb(64, 203, 246),
        rgb(130, 192, 65)
      );`,
    white: '#FFFFFF',
    gray: '#D4D4D4'
  }
}

const LightTheme = {
  ...ThemeStatic,
  type: 'light',
  colors: {
    background: '#ffffff',
    background02: '#35353D',
    footer: 'rgba(255,255,255, 0.5)',
    text: '#b7b7c3',
    text02: '#0f141e',
    text03: '#0f141e',
    red: '#D92E3F',
    primary: '#1bb3e0',
    primary01: '#5fc9e9',
    primary02: '#a3e0f2',
    black: '#1F1F24',
    black01: '#27272D',
    black02: '#35353D',
    black03: '#484854',
    black04: '#737380',
    purple: '#6321CE',
    pink: '#FF3773',
    blue: '#3B37FF',
    green: '#1BE0AB',
    gradient01:
      'linear-gradient(270.03deg, #3B37FF 0.05%, rgba(59, 55, 255, 0) 98.15%)',
    gradient02:
      'linear-gradient(265.22deg, #5fc9e9 -1.83%, rgba(40, 245, 190, 0) 95.01%)',
    gradient03: 'linear-gradient(83.89deg, #5fc9e9 2.81%, #3B37FF 97.94%)',
    gradient04: 'linear-gradient(333.93deg, #2f2f2f 0%, #35353D 100%)',
    gradient05: 'linear-gradient(rgb(20, 24, 25), rgba(29, 41, 45, 0.4))',
    textGradient: `-webkit-linear-gradient(
        45deg,
        rgb(64, 203, 246),
        rgb(130, 192, 65)
      );`,
    white: '#ffffff',
    gray: '#D4D4D4'
  }
}

export { DarkTheme, LightTheme }
