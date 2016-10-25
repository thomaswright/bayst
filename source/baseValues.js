import { StyleSheet } from 'react-native'

/**___________________________________________________________________________*/

const colors = {
  navy:   '#001f3f',
  blue:   '#0074d9',
  aqua:   '#7fdbff',
  teal:   '#39cccc',
  olive:  '#3d9970',
  green:  '#2ecc40',
  lime:   '#01ff70',
  yellow: '#ffdc00',
  orange: '#ff851b',
  red:    '#ff4136',
  fuchsia:'#f012be',
  purple: '#b10dc9',
  maroon: '#85144b',
  black:  '#111111',
  gray:   '#aaaaaa',
  silver: '#dddddd',
  white:  '#ffffff',
}

/**___________________________________________________________________________*/


const socialColors = {
  'angellist': '#1c4082',
  'codepen': '#000000',
  'facebook': '#3b5998',
  'foursquare': '#0072b1',
  'github-alt': '#000000',
  'github': '#000000',
  'gitlab': '#e14329',
  'google-plus-official': '#dd4b39',
  'instagram': '#517fa4',
  'linkedin': '#007bb6',
  'medium': '#02b875',
  'pinterest': '#cb2027',
  'soundcloud': '#f50',
  'stumbleupon': '#EB4823',
  'tumblr': '#32506d',
  'twitch': '#6441A5',
  'twitter': '#00aced',
  'vimeo': '#aad450',
  'wordpress': '#21759b',
  'youtube': '#bb0000',
}

/**___________________________________________________________________________*/

const baseValues = {
  spacingScaleVertical: [0, 4, 8, 16, 32, 64],
  spacingScaleHorizontal: [0, 4, 8, 16, 32, 64],
  borderWidthTypes: {
    none: 0,
    hairline: StyleSheet.hairlineWidth || 1,
    thin: 2,
    thick: 4,
  },
  borderRadiusTypes: {
    none: 0,
    small: 3,
    large: 8,
    circle: 9999,
  },
  elevationScale: [0, 1, 2, 4, 8, 16],
  fontSizeScale: [64, 32, 24, 20, 16, 12, 10, 6],
  lineHeightTypes: {
    none: 0,
    equal: 1,
    small: 1.20,
    medium: 1.35,
    large: 1.60,
  },
  fontWeightTypes: {
    light: "300",
    regular: "500",
    bold: "700",
    heavy: "900",
  },
  fontColors: {
    white: "#fff",
    light: "#888",
    dark: "#333",
    black: "#000",
  },
  colors: {
    ...colors,
    ...socialColors
  },
  colorThemes: {
    primary:   {color: colors.navy,   backgroundColor: colors.white},
    secondary: {color: colors.aqua,   backgroundColor: colors.white},
    default:   {color: colors.gray,   backgroundColor: colors.white},
    info:      {color: colors.yellow, backgroundColor: colors.white},
    success:   {color: colors.green,  backgroundColor: colors.white},
    warning:   {color: colors.maroon, backgroundColor: colors.white},
    error:     {color: colors.red,    backgroundColor: colors.white},
  },
}

export default baseValues
