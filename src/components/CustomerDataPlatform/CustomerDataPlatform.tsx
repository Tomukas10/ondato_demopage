import {
  Button,
  Container,
  Flex,
  Grid,
  Image,
  ScrollArea,
  SimpleGrid,
  Tabs,
  Title,
} from '@mantine/core';
import featureItem from './featureList';

function customerDataPlatform(): JSX.Element {
  return (
    <Tabs.Panel value="customerDataPlatform" w={1042} h={734}>
      <Flex align="center">
        <Container>
          <Title order={4}>Ondao OS - Customer data platform</Title>
          <Title order={6}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Title>
        </Container>

        <Button>
          Check out identification data
        </Button>
      </Flex>

      <Grid columns={5} mt="md">
        <Grid.Col span={3}>
          <Image src="./src/assets/d456eaab86213f569834005ce2e9ac77b473b657.png" />
        </Grid.Col>

        <Grid.Col span={2}>
          <Title order={4}>Feature list</Title>

          <Grid>
            <Grid.Col span={3}>
              <ScrollArea>
                <SimpleGrid spacing="xs" verticalSpacing="md">
                  {featureItem()}
                  {featureItem()}
                  {featureItem()}
                  {featureItem()}
                  {featureItem()}
                </SimpleGrid>
              </ScrollArea>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </Tabs.Panel>
  );
}

export default customerDataPlatform;
