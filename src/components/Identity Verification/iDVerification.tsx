import {
  Button,
  Container,
  Grid,
  Group,
  List,
  ListItem,
  ScrollArea,
  SimpleGrid,
  Tabs,
  Text,
} from '@mantine/core';
import ProductItem from '../productList';
import textClasses from '../Theme/text.module.css';
import containerClasses from '../Theme/containers.module.css';
import tabClasses from '../Theme/tabs.module.css';



function idVerification(): JSX.Element {
  return (
    <Tabs.Panel value="idVerification" w={1042} h={734} className={tabClasses.tab}>
      <Container w={677} p={0} m={0}>
        <Text className={textClasses.root}>
          Identity verification solutions
        </Text>
        <Text className={textClasses.descriptionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      </Container>

      <Grid w={994} h={616} columns={3}>
        <Grid.Col span={2}>
          <Text className={textClasses.secondaryText}>
            Solutions
          </Text>
          <ScrollArea h={616} w={655}>
            <SimpleGrid spacing="xs" verticalSpacing="md">
              <ProductItem isActive />
              <ProductItem isActive={false} />
              <ProductItem isActive={false} />
              <ProductItem isActive={false} />
              <ProductItem isActive={false} />
            </SimpleGrid>
          </ScrollArea>
        </Grid.Col>

        <Grid.Col span={1}>
          <Container h={563} w={315} p={0} style={{ borderRadius: '8px' }}>
            <Text className={textClasses.tertiaryText}>
              After identification is finished the client data can be found in Ondato OS(Customer
              data platorm)
            </Text>

            <Text className={textClasses.secondaryText}>
              Whitelabeling
            </Text>
            <Container className={containerClasses.default}
              h={132}
              w={315}/>
            <Text className={textClasses.secondaryDescriptionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua:
            </Text>

            <List className={textClasses.descriptionText}>
              <ListItem >Logo</ListItem>
              <ListItem>Typography</ListItem>
              <ListItem>UI elements</ListItem>
              <ListItem>Illustrations</ListItem>
            </List>

            <Button size="xs" variant="default" >
              More information
            </Button>

            <Text className={textClasses.examplesText}>Examples</Text>

            <Group>
              <Button size="xs" variant="secondary">
                Light mode
              </Button>
              <Button size="xs" variant="secondary">
                Dark mode
              </Button>
            </Group>
          </Container>
        </Grid.Col>
      </Grid>
    </Tabs.Panel>
  );
}

export default idVerification;
