import {
  ActionIcon,
  Alert,
  Badge,
  Button,
  createTheme,
  Input,
  Menu,
  Radio,
  RadioCard,
  RadioIndicator,
  rem,
  SegmentedControl,
  Select,
  Tabs,
  Text,
  Tooltip,
  Pill,
  Combobox,
  Accordion,
  Table,
  Slider,
  Switch,
  Checkbox,
  CheckboxGroup,
  NumberInput,
  ColorSwatch,
  ColorInput,
  Anchor,
} from '@mantine/core';
import accordionClasses from './accordion.module.css';
import actionIconClasses from './actionIcon.module.css';
import alertClasses from './alert.module.css';
import badgeClasses from './badge.module.css';
import buttonClasses from './button.module.css';
import checkboxClasses from './checkbox.module.css';
import checkboxGroupClasses from './checkboxGroup.module.css';
import colorInputClasses from './colorInput.module.css';
import comboboxClasses from './combobox.module.css';
import inputClasses from './input.module.css';
import inputWrapperClasses from './inputWrapper.module.css';
import menuClasses from './menu.module.css';
import pillClasses from './pill.module.css';
import radioClasses from './radio.module.css';
import segmentedControlClasses from './segmentedControl.module.css';
import selectClasses from './select.module.css';
import sliderClasses from './slider.module.css';
import switchClasses from './switch.module.css';
import tableClasses from './table.module.css';
import tabsClasses from './tabs.module.css';
import tooltipClasses from './tooltip.module.css';
import { MantineTheme } from '@mantine/core';


export const themeV7 = createTheme({
  components: {
    Anchor: Anchor.extend({
      defaultProps: {
        color: 'primary.4',
      },
    }),
    Text: Text.extend({
      defaultProps: {
        color: 'neutral.0',
      },
    }),
    Tabs: Tabs.extend({
      classNames: tabsClasses,
      defaultProps: {
        color: 'secondary.4',
      },
    }),
    TabsList: Tabs.List.extend({
      defaultProps: {
        px: 'lg',
      },
    }),
    TabsTab: Tabs.Tab.extend({
      defaultProps: {
        size: 'md',
        ps: rem(6),
        pe: rem(6),
        me: rem(32),
      },
    }),
   
    Input: Input.extend({
      classNames: inputClasses,
    }),
    InputWrapper: Input.Wrapper.extend({
      classNames: inputWrapperClasses,
    }),
    Select: Select.extend({
      classNames: selectClasses,
    }),
    Button: Button.extend({
      classNames: buttonClasses,
      defaultProps: {
        variant: 'primary',
        size: 'md',
      },
      vars: (theme: { fontSizes: { sm: any; md: any; }; }, { size }: any) => {
        if (size === undefined) {
          return { root: {} };
        }

        if (['md', 'compact-md'].includes(size)) {
          return {
            root: {
              '--button-fz': theme.fontSizes.sm,
            },
          };
        }

        if (['lg', 'compact-lg'].includes(size)) {
          return {
            root: {
              '--button-fz': theme.fontSizes.md,
            },
          };
        }

        return { root: {} };
      },
    }),
    SegmentedControl: SegmentedControl.extend({
      classNames: segmentedControlClasses,
      defaultProps: {
        size: 'md',
      },
      vars: (theme: { fontSizes: { sm: any; }; }) => ({ root: { '--sc-font-size': theme.fontSizes.sm } }),
    }),
    Tooltip: Tooltip.extend({
      classNames: tooltipClasses,
      defaultProps: {
        withArrow: true,
        arrowSize: 12,
        p: 'md',
        multiline: true,
      },
    }),
    
    ColorInput: ColorInput.extend({
      classNames: colorInputClasses,
    }),
    ColorSwatch: ColorSwatch.extend({
      defaultProps: {
        withShadow: false,
      },
    }),
    Slider: Slider.extend({
      classNames: sliderClasses,
      defaultProps: {
        labelAlwaysOn: true,
        color: 'secondary.4',
      },
    }),
    NumberInput: NumberInput.extend({
      defaultProps: {
        w: '80px',
      },
    }),
    Menu: Menu.extend({
      classNames: menuClasses,
    }),
    Checkbox: Checkbox.extend({
      defaultProps: {
        color: 'primary.6',
        iconColor: 'neutral.0',
      },
      classNames: checkboxClasses,
    }),
    CheckboxGroup: CheckboxGroup.extend({
      classNames: checkboxGroupClasses,
    }),
    Switch: Switch.extend({
      classNames: switchClasses,
      defaultProps: {
        color: '#C6F77F',
      },
    }),
    Radio: Radio.extend({
      defaultProps: {
        variant: 'outline',
        color: '#C6F77F',
      },
    }),
    RadioIndicator: RadioIndicator.extend({
      defaultProps: {
        variant: 'outline',
        color: '#C6F77F',
      },
    }),
    RadioCard: RadioCard.extend({
      classNames: radioClasses,
      defaultProps: {
        p: 'lg',
      },
    }),
    Table: Table.extend({
      classNames: tableClasses,
    }),
    Pill: Pill.extend({
      classNames: pillClasses,
    }),
    Combobox: Combobox.extend({
      classNames: comboboxClasses,
    }),
    Accordion: Accordion.extend({
      classNames: accordionClasses,
    }),
  },
  fontFamily: 'InterVariable, Arial, serif',
  black: '#2B2B2B',
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
    xs: rem(2),
    sm: rem(4),
    md: rem(8),
    lg: rem(16),
    xl: rem(32),
  },
  spacing: {
    xxs: rem(4),
    xs: rem(6),
    sm: rem(8),
    md: rem(12),
    lg: rem(16),
    xl: rem(20),
    xxl: rem(32),
  },
  fontSizes: {
    xs: rem(10),
    sm: rem(12),
    md: rem(14),
    lg: rem(16),
    xl: rem(18),
  },
  breakpoints: {
    xs: rem(576),
    sm: rem(768),
    md: rem(992),
    lg: rem(1275),
    xl: rem(1800),
  },
  shadows: {
    xs: '0px 0px 4px rgba(142, 160, 175, 0.25)',
    sm: '0px 1px 10px rgba(142, 160, 175, 0.34)',
    md: '0px 4px 14px rgba(142, 160, 175, 0.35)',
    lg: '0px 28px 80px rgba(142, 160, 175, 0.25), 0px 6.25417px 17.869px rgba(142, 160, 175, 0.22), 0px 1.86203px 5.32008px rgba(142, 160, 175, 0.19)',
    xl: '0px 28px 80px rgba(48, 61, 78, 0.25), 0px 6.25417px 17.869px rgba(48, 61, 78, 0.22), 0px 1.86203px 5.32008px rgba(48, 61, 78, 0.19)',
  },
});
