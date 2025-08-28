import { Button, Container, Flex, Tabs, Title } from '@mantine/core';

function businessintelligence(): JSX.Element {
  return (
    <Tabs.Panel value="businessInteligence" w={1042} h={734}>
      <Container>
        <Title order={4}>Business Intelligence</Title>
        <Title order={6}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Title>

        <Container>
          <Flex justify="space-between" align="flex-start">
            <Container>
              <Title order={4}>Business report</Title>

              <Title order={6}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </Title>

              <Container >
                <Button>Open</Button>
                <Button variant="default">
                  Documentation
                </Button>
              </Container>
            </Container>

            <Container>
              <Title order={5}>Examples</Title>
              <Container>
                <Button>
                  KYB report
                </Button>
                <Button>
                  Business report
                </Button>
              </Container>
            </Container>
          </Flex>
        </Container>

        <Container>
          <Title order={4}>Company search</Title>
          <Title order={6}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Title>
          <Container>
            <Button>Open</Button>
            <Button variant="default">
              Documentation
            </Button>
          </Container>
        </Container>
      </Container>
    </Tabs.Panel>
  );
}

export default businessintelligence;
