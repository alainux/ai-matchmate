import { colord } from 'colord';

const BASE_FONT = 14;
const BASE_LINE_HEIGHT = 14 * 1.5;

const BASE_UNIT = 4;
const text = {
  variations: {
    small: {
      fontSize: BASE_FONT * 0.8,
      lineHeight: BASE_LINE_HEIGHT * 0.8,
      fontFamily: 'Inter-Regular',
    },
    base: {
      lineHeight: BASE_LINE_HEIGHT,
      fontSize: BASE_FONT,
      fontFamily: 'Inter-Regular',
    },
    strong: {
      lineHeight: BASE_LINE_HEIGHT,
      fontSize: BASE_FONT,
      fontFamily: 'Inter-Bold',
    },
    strongLarge: {
      fontSize: BASE_FONT * 1.25,
      lineHeight: BASE_LINE_HEIGHT * 1.25,
      fontFamily: 'Inter-Bold',
    },
    header: {
      fontSize: BASE_FONT * 1.5,
      lineHeight: BASE_LINE_HEIGHT * 1.5,
      fontFamily: 'Inter-Bold',
    },
  },
};

const colors = {
  dark: '#272522',
  greyLight: '#e2e5e5',
  greyDark: '#9ba7aa',
  red: '#d5394e',
};

export const lighter = (hex: string) => colord(hex).lighten(0.1).toHex();
export const disable = (hex: string) => colord(hex).desaturate(0.5).toHex();
export const opacity = (hex: string) => colord(hex).alpha(0.7).toHex();

const themeTokens = {
  text: colors.greyDark,
  textSubtle: opacity(colors.greyDark),
  textPrimary: colors.red,
  textInverted: colors.dark,

  border: lighter(colors.dark),
  borderLight: colors.greyLight,

  buttonPrimary: colors.red,
  buttonPrimaryText: colors.greyLight,

  buttonSecondary: colors.greyDark,
  buttonSecondaryText: colors.greyDark,

  background: colors.dark,
  backgroundLighter: lighter(colors.dark),

  surfacePaddingHorizontal: BASE_UNIT * 4,
  surfacePaddingVertical: BASE_UNIT * 4,

  radius: BASE_UNIT,

  spacer: BASE_UNIT * 4,
};

export const theme = {
  baseUnit: BASE_UNIT,
  text,
  colors: colors,
  tokens: themeTokens,
  common: {
    container: {
      backgroundColor: colors.dark,
      paddingHorizontal: BASE_UNIT * 4,
      paddingVertical: BASE_UNIT * 4,
    },
    surfaceDimensions: {
      borderRadius: themeTokens.radius,
      paddingVertical: themeTokens.surfacePaddingVertical,
      paddingHorizontal: themeTokens.surfacePaddingHorizontal,
    },
    input: {
      borderWidth: 1,
      borderColor: themeTokens.border,
      backgroundColor: themeTokens.backgroundLighter,
      color: themeTokens.buttonPrimaryText,
    },
  },
  navigation: {
    header: {
      headerStyle: {
        height: BASE_UNIT * 20,
        backgroundColor: themeTokens.background,
      },
      headerShadowVisible: false, // applied here
      headerTitleStyle: {
        ...text.variations.header,
        color: themeTokens.buttonPrimaryText,
      },
      headerBackTitleStyle: {
        color: themeTokens.buttonPrimaryText,
      },
      headerTintColor: themeTokens.buttonPrimary,
    },
  },
};
export type ThemeType = typeof theme;
