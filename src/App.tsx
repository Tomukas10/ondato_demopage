import { memo, ReactElement } from 'react';
import { IconMessageCircle, IconPhoto, IconSettings } from '@tabler/icons-react';
import { I18nextProvider } from 'react-i18next';
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
import { themeV7 } from './components/Theme/themeV7';
import i18n from './translations';
import textClasses from './components/Theme/text.module.css';


export const AppNew = memo((): ReactElement => {
  // #############################################################################
  // #############################################################################

  function DemoPage() {
    return (
      <AppShell>
        <Box
          style={{
            minHeight: '840px',
            minWidth: '1042px',
            display: 'flex',
            margin: '12px 300px 48px 190px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Container w={1042} h={840}>
            <Flex style={{ alignItems: 'center' }} w={1042} h={41} justify="space-between">
              <Flex w={300} h={29} gap={28} style={{ alignItems: 'center' }}>
                <Image w={135} h={29} src="src/assets/Ondato_logo.png" alt="Ondato Logo" />
                <Text className={textClasses.root}
                  w={137}
                  h={24}>
                  Sales platform
                </Text>
              </Flex>
              <Button style={{ background: '#B4B4B440' }}>Contact us</Button>
            </Flex>

            <Box
              w={1042}
              style={{
                marginTop: '24px',
                boxShadow: `
          0px 2px 4px rgba(76, 94, 123, 0.11),
          0px 7px 7px rgba(76, 94, 123, 0.10),
          0px 16px 10px rgba(76, 94, 123, 0.06),
          0px 29px 12px rgba(76, 94, 123, 0.02)`,
                borderRadius: '8px',
              }}
            >
              <Tabs defaultValue="idVerification">
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
    <I18nextProvider i18n={i18n}>
      <MantineProvider theme={themeV7}>
        <DemoPage />
      </MantineProvider>
    </I18nextProvider>
  );
});