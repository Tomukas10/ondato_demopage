import { createTheme, rem } from '@mantine/core';

export const theme = createTheme({
  // Typography
  fontFamily: 'Inter Variable, sans-serif',
  headings: {
    fontFamily: 'Inter Variable, sans-serif',
    sizes: {
      h1: { fontSize: rem(20), fontWeight: 'bold', lineHeight: '1.0' },
      h2: { fontSize: rem(18), fontWeight: '600', lineHeight: '1.0' },
      h3: { fontSize: rem(14), fontWeight: '400', lineHeight: '1.2' },
      h4: { fontSize: rem(12), fontWeight: '400', lineHeight: '1.2' },
    },
  },
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(20),
  },

  // Color palette
  colors: {
    // Custom brand colors
    brand: [
      'B4B4B440', // lightest
      '#e0f2fe',
      '#bae6fd',
      '#7dd3fc',
      '#38bdf8',
      '#B4B4B440', // main brand
      '#0284c7',
      '#0369a1',
      '#075985',
      '#0c4a6e', // darkest
    ],
    // Custom accent colors
    accent: [
      '#f7fee7',
      '#ecfccb',
      '#d9f99d',
      '#d1f6ac', // main accent (used in buttons)
      '#a3e635',
      '#84cc16',
      '#65a30d',
      '#4d7c0f',
      '#365314',
      '#1a2e05',
    ],
    // Gray variations
    gray: [
      '#f8fafc',
      '#f1f5f9',
      '#e2e8f0',
      '#cbd5e1',
      '#94a3b8',
      '#64748b',
      '#475569',
      '#334155',
      '#1e293b',
      '#0f172a',
    ],
    // Background variations
    background: [
      '#ffffff',
      '#f9fafc', // main background color used
      '#f1f5f9',
      '#e2e8f0',
      '#cbd5e1',
      '#94a3b8',
      '#64748b',
      '#475569',
      '#334155',
      '#1e293b',
    ],
    // Border variations
    border: [
      '#f1f5f9',
      '#e2e8f0',
      '#cbd5e1',
      '#e0e5eb', // main border color used
      '#94a3b8',
      '#64748b',
      '#475569',
      '#334155',
      '#1e293b',
      '#0f172a',
    ],
  },

  // Primary color
  primaryColor: 'brand',

  // Default radius
  defaultRadius: 'md',
  radius: {
    xs: rem(4),
    sm: rem(6),
    md: rem(8), // main radius used
    lg: rem(12),
    xl: rem(16),
  },

  // Spacing
  spacing: {
    xs: rem(4),
    sm: rem(8),
    md: rem(12), // frequently used
    lg: rem(16),
    xl: rem(24), // frequently used
    xxl: rem(32), // used in margins
  },

  // Component overrides
  components: {
    Container: {
      defaultProps: {
        size: 'xl',
      },
      styles: {
        root: {
          padding: 0,
          margin: 0,
        },
      },
    },

    Text: {
      styles: () => ({
        root: {
          fontFamily: 'Inter Variable, sans-serif',
        },
      }),
    },

    Button: {
      defaultProps: {
        size: 'sm',
        radius: 'md',
      },
      styles: () => ({
        root: {
          fontFamily: {
            height: rem(32),
            fontSize: rem(12),
            fontWeight: 400,
            color: '#B4B4B440',
          },
        },
      }),
    },

    ScrollArea: {
      defaultProps: {
        scrollbars: 'y',
      },
      styles: () => ({
        root: {
          backgroundColor: '#F9FAFC',
          borderRadius: rem(8),
          padding: rem(24),
        },
      }),
    },

    Grid: {
      styles: {
        root: {
          margin: 0,
          padding: 0,
        },
        col: {
          padding: 0,
        },
      },
    },

    Tabs: {
      styles: () => ({
        panel: {
          padding: `${rem(12)} ${rem(24)}`,
        },
      }),
    },

    List: {
      styles: () => ({
        root: {
          fontSize: rem(12),
          paddingLeft: rem(20),
          fontWeight: 400,
          fontFamily: 'Inter Variable, sans-serif',
        },
        item: {
          fontSize: rem(12),
          fontWeight: 400,
        },
      }),
    },

    SimpleGrid: {
      defaultProps: {
        spacing: 'xs',
        verticalSpacing: 'md',
      },
    },

    Image: {
      styles: {
        root: {
          gap: rem(10),
        },
      },
    },

    Flex: {
      defaultProps: {
        align: 'center',
      },
    },
  },

  // Breakpoints for responsive design
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
});

// Utility classes for common patterns (use these as CSS classes or inline styles)
export const utilityClasses = {
  contentCard: {
    backgroundColor: '#F9FAFC',
    borderRadius: '8px',
    padding: '24px',
    marginTop:'12px'
  },

  infoCard: {
    backgroundColor: '#B4B4B440',
    borderRadius: '8px',
    padding: '24px',
  },

  sectionTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '4px',
  },

  sectionSubtitle: {
    fontSize: '18px',
    fontWeight: 600,
    fontFamily: 'Inter Variable, sans-serif',
    lineHeight: 1,
    marginBottom: '12px',
  },

  bodyText: {
    fontSize: '12px',
    fontWeight: 400,
    fontFamily: 'Inter Variable, sans-serif',
    maxWidth: '690px',
  },

  featureContainer: {
    height: '153px',
    width: '988px',
    padding: '12px 24px 12px 24px',
    backgroundColor: '#F9FAFC',
    borderRadius: '8px',
    marginBottom: '12px',
  },

  accentButton: {
    backgroundColor: '#d1f6ac',
    color: 'black',
    fontSize: '12px',
    fontWeight: 400,
    height: '32px',
  },

  dataButton: {
    backgroundColor: '#d1f6ac',
    color: 'black',
    fontSize: '14px',
    fontWeight: 400,
    height: '32px',
  },

  contactButton: {
    backgroundColor: '#B4B4B440',
    color: 'black',
    fontSize: '14px',
    fontWeight: 400,
    height: '32px',
  },

  grayButtons: {
    backgroundColor: '#B4B4B440',
    color: 'black',
    fontSize: '12px',
    fontWeight: 400,
  },
};
