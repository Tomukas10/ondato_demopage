import {
  Button,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  ScrollArea,
  SimpleGrid,
  Tabs,
  Title,
} from '@mantine/core';
import featureItem from './featureList';

function customerDataPlatform(): JSX.Element {
  return (
    <Tabs.Panel value="customerDataPlatform" w={1042} h={734} p={24}>
      <Flex align={'center'} direction={'row'} gap={89}>
        <Group gap={4} w={677}>
          <Title order={4}>Ondao OS - Customer data platform</Title>
          <Title order={6}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Title>
        </Group>
        <Button ml={"xs"}><Title order={6}>Check out identification data</Title></Button>
      </Flex>
      
        <Grid columns={5} mt="md">
          <Grid.Col span={3} mt={"xl"}>
            <Image src="./src/assets/d456eaab86213f569834005ce2e9ac77b473b657.png" />
          </Grid.Col>

          <Grid.Col span={2}>
            <Group gap={12}>
              <Title order={4}>Feature list</Title>
              <ScrollArea
                scrollbars="y"
                style={{ backgroundColor: '#F9FAFC', borderRadius: '8px' }}
                p={24}
                h={582}
                w={371}
              >
                <SimpleGrid spacing="xs" verticalSpacing="md">
                  {featureItem()}
                  {featureItem()}
                  {featureItem()}
                  {featureItem()}
                  {featureItem()}
                </SimpleGrid>
              </ScrollArea>
            </Group>
          </Grid.Col>
        </Grid>
    </Tabs.Panel>
  );
}

export default customerDataPlatform;
