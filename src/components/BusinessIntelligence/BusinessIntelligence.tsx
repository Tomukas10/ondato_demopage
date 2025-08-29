import { Button, Container, Flex, Group, Tabs, Title } from '@mantine/core';

function businessintelligence(): JSX.Element {
  return (
    <Tabs.Panel value="businessInteligence" w={1042} h={734} p={24}>
      <Group gap={32}>
        <Group gap={4} w={677}>
          <Title order={4}>Business Intelligence</Title>
          <Title order={6}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Title>
        </Group>
        <Group gap={12}>
          <Flex
            justify="space-between"
            align="center"
            style={{ backgroundColor: '#F9FAFC', borderRadius: '8px' }}
            gap={8}
            p={24}
            w={988}
          >
            <Group gap={12}>
              <Flex direction="column" gap={8}>
                <Title order={4}>Business report</Title>

                <Title order={6} w={650}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </Title>
              </Flex>

              <Group>
                <Button>Open</Button>
                <Button variant="default">Documentation</Button>
              </Group>
            </Group>
            <Flex direction={'column'} gap={12} w={127}>
                <Title order={5}>Examples</Title>
                  <Button variant='secondary'>KYB report</Button>
                  <Button variant='secondary'>Business report</Button>
            </Flex>
          </Flex>

          <Flex
            direction="column"
            style={{ backgroundColor: '#F9FAFC', borderRadius: '8px' }}
            gap={12}
            p={24}
            w={988}
          >
            <Title order={4}>Company Search</Title>

            <Title order={6} w={650}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Title>

            <Group>
              <Button>Open</Button>
              <Button variant="default">Documentation</Button>
            </Group>
          </Flex>
        </Group>
      </Group>
    </Tabs.Panel>
  );
}

export default businessintelligence;
