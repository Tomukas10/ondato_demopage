import { Button, Container, Flex, Tabs, Text } from '@mantine/core';

function businessintelligence(): JSX.Element {
  return (
    <Tabs.Panel
      value="businessInteligence"
      w={1042}
      h={734}
      style={{ padding: '12px 24px 12px 24px' }}
    >
      <Container w={677} h={58} p={0} m={0}>
        <Text
          style={{
            fontFamily: 'Inter Variable',
            fontWeight: '600',
            fontStyle: 'SemiBold',
            fontSize: '20px',
            lineHeight: ' 100%',
            letterSpacing: '0%',
          }}
        >
          Business Intelligence
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>

        <Container h={153} w={988} p={24} style={{ background: '#F9FAFC' }}>
          <Flex justify="space-between" align="flex-start" p={0} m={0}>
            <Container p={0} m={0} style={{ flex: 1 }}>
              <Text
                w={607}
                style={{
                  fontFamily: 'Inter Variable',
                  fontWeight: '600',
                  fontStyle: 'SemiBold',
                  fontSize: '18px',
                  lineHeight: ' 100%',
                  letterSpacing: '0%',
                }}
              >
                Business report
              </Text>

              <Text w={607}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </Text>

              <Container p={0} style={{ marginTop: '12px' }}>
                <Button h={32}>Open</Button>
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

            <Container w={127} h={105} style={{ marginRight: '12px' }}>
              <Text
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '8px',
                  marginLeft: '12px',
                }}
              >
                Examples
              </Text>
              <Container style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Button h={32} w={125}>
                  KYB report
                </Button>
                <Button h={32} w={125}>
                  Business report
                </Button>
              </Container>
            </Container>
          </Flex>
        </Container>

        <Container h={153} w={988} p={24} style={{ background: '#F9FAFC', marginTop: '12px' }}>
          <Text
            style={{
              fontFamily: 'Inter Variable',
              fontWeight: '600',
              fontStyle: 'SemiBold',
              fontSize: '18px',
              lineHeight: ' 100%',
              letterSpacing: '0%',
            }}
          >
            Company search
          </Text>
          <Text w={607}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Text>
          <Container style={{ marginLeft: '8px', marginTop: '8px' }} p={0} m={0}>
            <Button h={32}>Open</Button>
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
