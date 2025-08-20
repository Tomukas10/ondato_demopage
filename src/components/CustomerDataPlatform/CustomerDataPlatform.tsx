import {
  Button,
  Container,
  Flex,
  Grid,
  Image,
  ScrollArea,
  SimpleGrid,
  Tabs,
  Text,
} from '@mantine/core';
import featureItem from '@/featureList';

function customerDataPlatform(): JSX.Element {
  return (
    <Tabs.Panel
      value="customerDataPlatform"
      w={1042}
      h={734}
      style={{ padding: '12px 24px 12px 24px' }}
    >
      <Flex align="center" style={{ gap: '100px' }}>
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
            Ondao OS - Customer data platform
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        </Container>

        <Button w={222} h={41} style={{ float: 'right', padding:'12px 16px 12px 16px',  fontFamily: 'Inter Variable',
              fontWeight: '400',
              fontStyle: 'SemiBold',
              fontSize: '14px',
              lineHeight: ' 120%',
              letterSpacing: '0%',  }}>
          Check out identification data
        </Button>
      </Flex>

      <Grid w={994} h={616} columns={5} mt="md" p={0} style={{ rowGap: '40px', columnGap: '40px' }}>
        <Grid.Col span={3}>
          <Image
            src="./src/assets/d456eaab86213f569834005ce2e9ac77b473b657.png"
            style={{ marginTop: '30px' }}
          />
        </Grid.Col>

        <Grid.Col span={2} style={{ borderRadius: '8px', padding: '24px' }}>
          <Text>Feature list</Text>

          <Grid w={371} h={582}>
            <Grid.Col span={3}>
              <ScrollArea h={582} w={371}>
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
