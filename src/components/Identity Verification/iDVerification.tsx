import { Container, Button, Group, Tabs, Text, Grid, ScrollArea, SimpleGrid, ListItem, List } from '@mantine/core';
import productItem from "../productList";
import { theme, utilityClasses } from "../theme";

function idVerification(): JSX.Element {
    return(
        <Tabs.Panel value="idVerification" w={1042} h={734} style={{ padding: '12px 24px 12px 24px' }}>
          <Container w={677} p={0} m={0} style={{ marginBottom: '12px' }}>
            <Text style={utilityClasses.sectionTitle}>Identity verification solutions</Text>
            <Text style={utilityClasses.bodyText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Container>

          <Grid w={994} h={570} columns={3}>
            <Grid.Col span={2} >   
                
                  <Text style={{ 
                    fontSize: '18px',
                    fontWeight: 600,
                    fontFamily: 'Inter Variable, sans-serif',
                    lineHeight: 1,
                    marginBottom: '12px',
                    marginLeft:'5px',
                    fontStyle:'Semi Bold',
                    
                  }}>
                    Solutions
                  </Text>
                  <ScrollArea h={582} w={655} style={utilityClasses.contentCard} >
                    <SimpleGrid spacing="xs" verticalSpacing="md">
                      {productItem()}
                      {productItem()}
                      {productItem()}
                      {productItem()}
                      {productItem()}
                    </SimpleGrid>
                  </ScrollArea>
                </Grid.Col>
            
            <Grid.Col span={1}>
              <Container h={563} w={315} p={0} style={{ borderRadius: '8px' }}>
                <Text style={{
                  fontSize: '14px',
                  fontWeight: 400,
                  padding: '16px',
                  backgroundColor: '#B4B4B440',
                  borderRadius: '4px',
                  marginTop: '32px',
                  marginBottom: '32px'
                }}>
                  After identification is finished the client data can be found in Ondato OS(Customer data platorm)
                </Text>
                
                <Text style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  fontFamily: 'Inter Variable, sans-serif',
                  lineHeight: 1,
                  marginBottom: '16px',
                  marginTop: '0'
                }}>
                  Whitelabeling
                </Text>
                
                <Container h={132} w={315} style={utilityClasses.infoCard} />
                
                <Text style={{ ...utilityClasses.bodyText, marginTop: '24px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua:
                </Text>
                
                <List>
                  <ListItem>Logo</ListItem>
                  <ListItem>Typography</ListItem>
                  <ListItem>UI elements</ListItem>
                  <ListItem>Illustrations</ListItem>
                </List>
                
                <Button size="xs" variant="default" style={{ marginBottom: '24px' }}>
                  More information
                </Button>
                
                <Text style={{ marginBottom: '8px' }}>Examples</Text>
                
                <Group>
                  <Button size="xs" variant="outline">Light mode</Button>
                  <Button size="xs" variant="outline">Dark mode</Button>
                </Group>
              </Container>
            </Grid.Col>
          </Grid>
        </Tabs.Panel>
    );
}; 

export default idVerification;