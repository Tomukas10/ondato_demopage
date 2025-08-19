import { MantineThemeOverride } from '@mantine/core';

export const lightTheme: MantineThemeOverride = {
  fontFamily: 'InterVariable, Arial, serif',

  colors: {
    neutral: [
      '#2B2B2B',
      '#333333',
      '#545454',
      '#6B6B6B',
      '#808080',
      '#ABABAB',
      '#CECECE',
      '#E6E6E6',
      '#F9F9F9',
      '#FFFFFF',
    ],
    secondary: [
      '#0E1B2B',
      '#303D4E',
      '#515F70',
      '#738193',
      '#94A3B5',
      '#B7C2CF',
      '#DAE1E8',
      '#E6EBF0',
      '#F3F5F8',
      '#F9FAFC',
    ],
    alert: [
      '#360B0B',
      '#661616',
      '#972415',
      '#BA3D27',
      '#F76D4D',
      '#F8856B',
      '#F89B86',
      '#FFC0B3',
      '#F9D6CE',
      '#FAF0EE',
    ],
    primary: [
      '#192B17',
      '#264523',
      '#43783D',
      '#72B05A',
      '#8FC967',
      '#ADE374',
      '#CAFC81',
      '#CAF5A7',
      '#E7FCC7',
      '#F6FCED',
    ],
    warning: [
      '#2B0F01',
      '#612302',
      '#994703',
      '#C96704',
      '#DE9D21',
      '#EEC83E',
      '#F6DB73',
      '#FEEEA8',
      '#FFF6C3',
      '#FFFDDE',
    ],
    violet: [
      '#20153B',
      '#423164',
      '#654D8E',
      '#8868B7',
      '#AA84E0',
      '#BA9AE6',
      '#C9B0EB',
      '#D9C7F1',
      '#E8DDF6',
      '#F8F3FC',
    ],
    blue: [
      '#062845',
      '#174567',
      '#296189',
      '#3A7DAA',
      '#4B9ACC',
      '#6BADD6',
      '#8BC0E0',
      '#ABD2EB',
      '#D9ECF7',
      '#EBF8FF',
    ],
  },
  headings: {
    fontFamily: 'InterVariable, Arial, serif',
    fontWeight: '500',
    sizes: {
      h1: { fontSize: '1.75rem', lineHeight: '125%' },
      h2: { fontSize: '1.5rem', lineHeight: '125%' },
      h3: {
        fontSize: '1.25rem',
        lineHeight: '125%',
      },
      h4: { fontSize: '1.125rem', lineHeight: '125%' },
      h5: { fontSize: '1rem', lineHeight: '125%' },
      h6: { fontSize: '0.875rem', lineHeight: '125%' },
    },
  },
  radius: {
    xs: '2',
    sm: '4',
    md: '8',
    lg: '16',
    xl: '32',
  },
  spacing: {
    xs: '6',
    sm: '8',
    md: '12',
    lg: '16',
    xl: '20',
  },
  fontSizes: {
    xs: '10',
    sm: '12',
    md: '14',
    lg: '16',
    xl: '18',
  },
  breakpoints: {
    xs: '576',
    sm: '768',
    md: '992',
    lg: '1275',
    xl: '1800',
  },
  shadows: {
    xs: '0px 0px 4px rgba(142, 160, 175, 0.25)',
    sm: '0px 1px 10px rgba(142, 160, 175, 0.34)',
    md: '0px 4px 14px rgba(142, 160, 175, 0.35)',
    lg: '0px 28px 80px rgba(142, 160, 175, 0.25), 0px 6.25417px 17.869px rgba(142, 160, 175, 0.22), 0px 1.86203px 5.32008px rgba(142, 160, 175, 0.19)',
    xl: '0px 28px 80px rgba(48, 61, 78, 0.25), 0px 6.25417px 17.869px rgba(48, 61, 78, 0.22), 0px 1.86203px 5.32008px rgba(48, 61, 78, 0.19)',
  },

  other: {
    iconSizes: {
      xs: 12,
      sm: 16,
      md: 24,
      lg: 32,
      xl: 48,
    },
    // TODO: DANGER ZONE: STOP USING THEM
    spacing: {
      px2: '0.125rem', // 2px
      small: '.25rem', // 4px
      xs: '0.3125rem', // 5px
      sm: '0.4375rem', // 7px
      px8: '0.5rem', // 8px
      medium: '0.625rem', // 10px
      px13: '0.8125rem', // 13px
      px14: '0.875rem', // 14px
      xl: '1.125rem', // 18px
      px19: '1.1875rem', // 19px
      xxl: '1.5rem', // 24px
      xxxl: '1.75rem', // 28px
      xmedium: '2rem',
      px30: '1.875rem', // 30px
      px32: '2rem', // 32px
      px36: '2.25rem', // 36px
      xxxxl: '2.5rem', // 40px
      large: '3rem', // 48px
    },
    fontSize: {
      xxs: '0.5625rem', // 9px
      xs: '0.6875rem',
      xxl: '1.15rem',
      xxxl: '1.5rem',
      large: '2rem',
      px36: '2.25rem', // 36px
    },
  },
};
