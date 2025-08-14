import { Button, Container, Flex, Tabs, Text } from '@mantine/core';
import { utilityClasses } from '../Theme';

function businessintelligence(): JSX.Element {
  return (
    <Tabs.Panel
      value="businessInteligence"
      w={1042}
      h={734}
      style={{ padding: '12px 24px 12px 24px' }}
    >
      <Container w={677} h={58} p={0}>
        <Text style={utilityClasses.sectionTitle}>Business Intelligence</Text>
        <Text style={utilityClasses.bodyText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>

        <Container
          style={{ ...utilityClasses.featureContainer, position: 'relative', marginTop: '32px' }}
        >
          <Flex justify="space-between" align="flex-start">
            <Container style={{ flex: 1 }}>
              <Text w={607} style={{ ...utilityClasses.sectionTitle, marginLeft: '8px' }}>
                Business report
              </Text>

              <Text style={{ ...utilityClasses.bodyText, marginLeft: '8px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Text>

              <Container style={{ marginLeft: '8px', marginTop: '8px' }}>
                <Button
                  style={{
                    ...utilityClasses.accentButton,
                    width: '89px',
                    marginRight: '6px',
                  }}
                >
                  Open
                </Button>
                <Button
                  h={32}
                  w={125}
                  variant="default"
                  style={{ fontSize: '12px', fontWeight: '400', marginLeft: '6px' }}
                >
                  Documentation
                </Button>
              </Container>
            </Container>

            <Container w={127} h={105} style={{ margin: 0, padding: '8px' }}>
              <Text style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
                Examples
              </Text>
              <Container style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Button h={32} w={125} style={{ ...utilityClasses.grayButtons }}>
                  KYB report
                </Button>
                <Button h={32} w={125} style={{ ...utilityClasses.grayButtons }}>
                  Business report
                </Button>
              </Container>
            </Container>
          </Flex>
        </Container>

        <Container style={{ ...utilityClasses.featureContainer, marginTop: '12px' }}>
          <Text style={{ ...utilityClasses.sectionTitle, marginLeft: '8px' }}>Company search</Text>
          <Text style={{ ...utilityClasses.bodyText, marginLeft: '8px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullambo laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
          <Container style={{ marginLeft: '8px', marginTop: '8px' }}>
            <Button
              style={{
                ...utilityClasses.accentButton,
                width: '89px',
                marginRight: '6px',
              }}
            >
              Open
            </Button>
            <Button
              h={32}
              w={125}
              variant="default"
              style={{ fontSize: '12px', fontWeight: 400, marginLeft: '6px' }}
            >
              Documentation
            </Button>
          </Container>
        </Container>
      </Container>
    </Tabs.Panel>
  );
}

export default businessintelligence;
