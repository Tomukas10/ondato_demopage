import { memo, ReactElement } from 'react';
import { IconMessageCircle, IconPhoto, IconSettings } from '@tabler/icons-react';
import {
  AppShell,
  Box,
  Button,
  Container,
  Flex,
  Image,
  MantineProvider,
  Tabs,
  Text,
} from '@mantine/core';
import businessintelligence from './components/BusinessIntelligence/BusinessIntelligence';
import customerDataPlatform from './components/CustomerDataPlatform/CustomerDataPlatform';
import idVerificationTab from './components/Identity Verification/iDVerification';
import { theme, utilityClasses } from './components/Theme';

export const AppNew = memo((): ReactElement => {
  // #############################################################################
  // #############################################################################

  function DemoPage() {
    return (
      <AppShell
        style={{
          backgroundImage: 'url("src/assets/2def582a0161a731db4ed050ae500795814fe0b4.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
        }}
      >
        <Box
          style={{
            minHeight: '840px',
            minWidth: '1042px',
            display: 'flex',
            margin: '12px 208px 48px 190px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Main container - centered */}
          <Container w={1042} h={840} style={{ padding: '0' }}>
            {/* Header with logo and contact button */}
            <Flex style={{ alignItems: 'center' }} w={1042} h={41} justify="space-between">
              <Flex w={300} h={29} gap={28} style={{ alignItems: 'center' }}>
                <Image w={135} h={29} src="src/assets/Ondato_logo.png" alt="Ondato Logo" />
                <Text
                  w={137}
                  h={24}
                  style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    fontStyle: 'SemiBold',
                    fontFamily: 'Inter Variable',
                    letterSpacing: '0%',
                    lineHeight: '100%',
                  }}
                >
                  Sales platform
                </Text>
              </Flex>
              <Button
                w={104}
                h={41}
                size="lg"
                style={{
                  gap: '8px',
                  padding: '12px 16px 12px 16px',
                  fontStyle: 'SemiBold',
                  fontFamily: 'Inter Variable',
                  letterSpacing: '0%',
                  lineHeight: '120%',
                  ...utilityClasses.contactButton,
                }}
              >
                Contact us
              </Button>
            </Flex>

            {/* Tabs container */}
            <Box
              w={1042}
              style={{
                marginTop: '24px',
                boxShadow: `
          0px 2px 4px rgba(76, 94, 123, 0.11),
          0px 7px 7px rgba(76, 94, 123, 0.10),
          0px 16px 10px rgba(76, 94, 123, 0.06),
          0px 29px 12px rgba(76, 94, 123, 0.02)
        `,
                borderRadius: '8px',
              }}
            >
              <Tabs
                defaultValue="idVerification"
                style={{ width: '100%', background: '#FFFFFF', borderRadius: '8px' }}
              >
                <Tabs.List h={41}>
                  <Tabs.Tab value="idVerification" leftSection={<IconPhoto size={12} />}>
                    Identity verification
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="customerDataPlatform"
                    leftSection={<IconMessageCircle size={12} />}
                  >
                    Customer data platform
                  </Tabs.Tab>
                  <Tabs.Tab value="businessInteligence" leftSection={<IconSettings size={12} />}>
                    Business intelligence
                  </Tabs.Tab>
                </Tabs.List>
                {idVerificationTab()}
                {customerDataPlatform()}
                {businessintelligence()}
              </Tabs>
            </Box>
          </Container>
        </Box>
      </AppShell>
    );
  }

  // #############################################################################
  // #############################################################################

  return (
    <MantineProvider theme={theme}>
      <DemoPage />
    </MantineProvider>
  );
});
