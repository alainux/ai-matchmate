export const BASE_FONT = 16;
export const BASE_LINE_HEIGHT = 16 * 1.5;
const text = {
  variations: {
    base: {
      lineHeight: BASE_LINE_HEIGHT,
      fontSize: BASE_FONT,
      fontFamily: 'Lexend-Regular',
    },
    header: {
      fontSize: BASE_FONT * 1.5,
      lineHeight: BASE_LINE_HEIGHT * 1.5,
      fontFamily: 'Lexend-Bold',
    },
  },
};

export const theme = {
  baseUnit: 4,
  text,
  colors: {
    primary: '#007AFF',
    secondary: '#4CAF50',
    error: '#F44336',
    background: '#F5F5F5',
    textPrimary: '#212121',
    textSecondary: '#757575',
    border: '#d3d3d3',
  },
};
