// Required to use type import, as a plain side-effect import will be emitted to runtime.
// https://github.com/mui-org/material-ui/issues/22203
// import type {} from "@material-ui/lab/themeAugmentation";
import { createTheme as muiCreateTheme, alpha } from '@material-ui/core/styles';
import { TypographyStyleOptions } from '@material-ui/core/styles/createTypography';
import merge from 'lodash.merge';
import {
  BORDER_BASE,
  BREAKPOINT_SM,
  BREAKPOINT_MD,
  BREAKPOINT_LG,
  BREAKPOINT_XL,
  COLOR_BRAND_PRIMARY_LIGHT,
  COLOR_BRAND_PRIMARY_DARK,
  COLOR_BRAND_PRIMARY_ACCENT,
  COLOR_BRAND_SECONDARY_BLACK,
  COLOR_BRAND_SECONDARY_WHITE,
  COLOR_BRAND_GRAY_10,
  COLOR_BRAND_GRAY_20,
  COLOR_BRAND_GRAY_30,
  COLOR_BRAND_GRAY_40,
  COLOR_BRAND_GRAY_50,
  COLOR_BRAND_GRAY_70,
  COLOR_BRAND_GRAY_80,
  COLOR_BRAND_GRAY_90,
  COLOR_BRAND_UI_SUPPORT_EXTRADARK,
  COLOR_BRAND_UI_SUPPORT_ACCENT_HOVER,
  COLOR_BRAND_UI_SUPPORT_ACCENT_DISABLED,
  COLOR_BRAND_UTILITY_ERROR,
  FONT_FAMILY_PRIMARY,
  FONT_FAMILY_SECONDARY,
  FONT_LETTER_SPACING_REGULAR,
  FONT_LETTER_SPACING_LOOSE,
  FONT_WEIGHT_REGULAR,
  FONT_WEIGHT_SEMIBOLD,
  FONT_WEIGHT_BOLD,
  SPACING_0,
  SPACING_8,
  SPACING_12,
  SPACING_16,
  SPACING_20,
  SPACING_24,
} from '@planetfitness/pf-design-tokens';

const commonTitle = {
  fontWeight: FONT_WEIGHT_BOLD,
  lineHeight: '130%',
  letterSpacing: FONT_LETTER_SPACING_LOOSE,
  textTransform: 'uppercase',
};

const h5 = {
  ...commonTitle,
  fontSize: '1.375rem',
  fontFamily: FONT_FAMILY_SECONDARY,
  fontWeight: FONT_WEIGHT_SEMIBOLD,
};

const commonBody = {
  fontFamily: FONT_FAMILY_SECONDARY,
  fontWeight: FONT_WEIGHT_REGULAR,
  lineHeight: '150%',
  letterSpacing: FONT_LETTER_SPACING_REGULAR,
};

function getTitleStyle(desktopFontSize, mobileFontSize) {
  return {
    ...commonTitle,
    fontSize: desktopFontSize,
    '@media (max-width:600px)': {
      fontSize: mobileFontSize,
    },
  };
}

export const extraLargeButton = {
  minHeight: '60px',
  fontSize: '1.375rem',
  letterSpacing: '0.125rem',
  padding: '10px 48px',
};

export const theme = muiCreateTheme({
  nprogress: {
    color: '#000',
  },
  palette: {
    primary: {
      main: COLOR_BRAND_PRIMARY_DARK,
      light: COLOR_BRAND_PRIMARY_LIGHT,
      dark: COLOR_BRAND_UI_SUPPORT_EXTRADARK,
      contrastText: COLOR_BRAND_SECONDARY_WHITE,
    },
    secondary: {
      main: COLOR_BRAND_PRIMARY_ACCENT,
      light: COLOR_BRAND_UI_SUPPORT_ACCENT_DISABLED,
      dark: COLOR_BRAND_UI_SUPPORT_ACCENT_HOVER,
      contrastText: COLOR_BRAND_PRIMARY_DARK,
    },
    type: "light",
    error: {
      main: COLOR_BRAND_UTILITY_ERROR,
    },
    grey: {
      100: COLOR_BRAND_GRAY_10,
      200: COLOR_BRAND_GRAY_20,
      300: COLOR_BRAND_GRAY_30,
      400: COLOR_BRAND_GRAY_40,
      500: COLOR_BRAND_GRAY_50,
      700: COLOR_BRAND_GRAY_70,
      800: COLOR_BRAND_GRAY_80,
      900: COLOR_BRAND_GRAY_90,
    },
    text: {
      primary: COLOR_BRAND_GRAY_80,
      secondary: COLOR_BRAND_GRAY_70,
      disabled: COLOR_BRAND_GRAY_40,
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: BREAKPOINT_SM,
      md: BREAKPOINT_MD,
      lg: BREAKPOINT_LG,
      xl: BREAKPOINT_XL,
    },
  },

  overrides: {
    MuiCheckbox: {
      root: {
        color: COLOR_BRAND_SECONDARY_BLACK,
      },
    },
    MuiInputLabel: {
      shrink: {
        transform: 'translate(0, -1.5px) scale(0.75)',
      },
    },
    MuiButton: {
      sizeLarge: {
        padding: '10px 32px',
        minHeight: '52px',
        fontSize: '1.25rem',
        letterSpacing: '0.1125rem',
      },
      sizeSmall: {
        fontSize: '1rem',
        padding: '10px 20px',
        letterSpacing: '0.0875rem',
        minHeight: '40px',
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: alpha(COLOR_BRAND_PRIMARY_DARK, 0.9),
      },
    },
    MuiDialog: {
      paper: {
        padding: `${SPACING_24} ${SPACING_16}`,
      },
    },
    MuiDialogActions: {
      root: {
        justifyContent: 'flex-end',
      },
      spacing: {
        '& > :not(:first-child)': {
          marginLeft: SPACING_24,
        },
      },
    },
    MuiInput: {
      underline: {
        '&:after': {
          borderBottomWidth: '3px',
        },
        '&:before': {
          borderBottomWidth: '2px',
        },
      },
    },
    MuiLink: {
      root: {
        fontWeight: 'bold',
        fontFamily: FONT_FAMILY_SECONDARY,
      },
      button: {
        verticalAlign: 'inherit',
        '&:hover': {
          opacity: 0.85,
        },
        '&:focus': {
          opacity: 0.85,
        },
        '&:disabled': {
          opacity: 0.5,
        },
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: SPACING_8,
        marginRight: SPACING_8,
      },
    },
    MuiListItemText: {
      inset: {
        paddingLeft: SPACING_16,
      },
      root: {
        marginTop: 0,
        marginBottom: 0,
      },
    },
    MuiListItem: {
      root: {
        marginTop: '12px',
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    MuiPaginationItem: {
      root: {
        color: COLOR_BRAND_PRIMARY_DARK,
        fontWeight: FONT_WEIGHT_SEMIBOLD,
      },
      rounded: {
        borderRadius: '4px',
      },
      textPrimary: {
        '&.Mui-selected': {
          backgroundColor: COLOR_BRAND_PRIMARY_DARK,
          color: COLOR_BRAND_SECONDARY_WHITE,
        },
      },
    },
    MuiSvgIcon: {
      fontSizeSmall: {
        fontSize: '1rem',
      },
      fontSizeLarge: {
        fontSize: '5rem',
      },
    },
    MuiAccordion: {
      root: {
        border: 'none',
      },
      rounded: {
        boxShadow: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0)',
      },
    },
    MuiAccordionSummary: {
      root: {
        color: COLOR_BRAND_SECONDARY_WHITE,
        background: COLOR_BRAND_PRIMARY_DARK,
        padding: `${SPACING_12} ${SPACING_20}`,
        borderRadius: 8,
        boxSizing: 'border-box',
        '&.Mui-expanded': {
          minHeight: 48,
        },
      },
      content: {
        margin: SPACING_0,
        '&.Mui-expanded': {
          margin: 0,
        },
      },
      expandIcon: {
        color: COLOR_BRAND_SECONDARY_WHITE,
        padding: `${SPACING_0} ${SPACING_12}`,
      },
    },
    MuiPopover: {
      paper: {
        borderRadius: BORDER_BASE,
      },
    },
    MuiPickersCalendarHeader: {
      transitionContainer: {
        height: '35px',
      },
    },
    MuiAlert: {
      root: {
        fontSize: '14px',
      },
    },
  },

  typography: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontSize: 16,

    allVariants: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'antialiased',
      color: COLOR_BRAND_GRAY_70,
    },

    h1: getTitleStyle('2.25rem', '1.875rem'),
    h2: getTitleStyle('2rem', '1.75rem'),
    h3: getTitleStyle('1.5rem', '1.5rem'),
    h4: getTitleStyle('1.25rem', '1.25rem'),
    h5,
    h6: {
      ...h5,
      fontSize: '1.125rem',
      letterSpacing: '0.015rem',
    },
    subtitle1: {
      fontFamily: FONT_FAMILY_SECONDARY,
      fontWeight: FONT_WEIGHT_REGULAR,
      lineHeight: '150%',
      fontSize: '1.5rem',
      letterSpacing: '0.024rem',
      textTransform: 'none',
    },

    body1: {
      ...commonBody,
      fontSize: '1.25rem',
      letterSpacing: '0.0225rem',
    },
    body2: {
      ...commonBody,
      fontSize: '1.125rem',
      letterSpacing: '0.016875rem',
    },

    caption: {
      ...commonBody,
      fontSize: '1rem',
      letterSpacing: '0.013rem',
    },

    button: {
      fontFamily: FONT_FAMILY_SECONDARY,
      padding: '10px 24px',
      textTransform: 'none',
      letterSpacing: '0.1125rem',
      lineHeight: '120%',
      fontSize: '1.125rem',
      minHeight: '44px',
    },
  },

  shape: { borderRadius: 6 },

  props: {
    // Name of the component ⚛️
    MuiGrid: {
      spacing: 4,
    },

    MuiInput: {
      style: {
        fontFamily: FONT_FAMILY_SECONDARY,
        fontWeight: 'bold',
        color: COLOR_BRAND_GRAY_90,
      },
    },
    MuiInputLabel: {
      style: {
        fontFamily: FONT_FAMILY_SECONDARY,
      },
      required: false,
    },
    MuiTextField: {
      fullWidth: true,
      SelectProps: {
        native: true,
      },
    },

    MuiButton: {
      style: {
        fontWeight: 'bold',
      },
    },

    MuiCheckbox: {
      color: 'primary',
    },

    MuiRadio: {
      color: 'primary',
    },

    MuiFormHelperText: {
      style: {
        fontFamily: FONT_FAMILY_SECONDARY,
        fontSize: '0.875rem',
      },
    },

    MuiLink: {
      underline: 'always',
    },

    MuiPagination: {
      color: 'primary',
      shape: 'rounded',
    },
  },
});

export const createTheme = (options, ...args) => muiCreateTheme(merge(theme, options), args);
