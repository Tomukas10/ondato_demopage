import { Container, Button, Tabs, Text, Flex } from '@mantine/core';
import { theme, utilityClasses } from "../theme";

function businessintelligence(): JSX.Element {
    return(
        <Tabs.Panel value="businessInteligence" w={1042} h={734} style={{ padding: '12px 24px 12px 24px' }}>                  
          <Container w={677} h={58} p={0} m={0}>
            <Text style={utilityClasses.sectionTitle}>Business Intelligence</Text>
            <Text style={utilityClasses.bodyText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
            <Container w={988} h={153}style={{ marginTop: '32px', padding: 0 }}>
              <Container  style={{...utilityClasses.featureContainer}}>
                <Text w={607} style={{ ...utilityClasses.sectionTitle, marginLeft: '8px'}}>Business report</Text>
                <Text style={{ ...utilityClasses.bodyText, marginLeft: '8px'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
                <Button 
                  style={{
                    ...utilityClasses.accentButton,
                    width: '89px',
                    marginRight: '6px',
                    margin: '8px 6px 0px 8px'
                  }}
                >
                  Open
                </Button>
                <Button 
                  h={32} 
                  w={125} 
                  variant="default" 
                  style={{ fontSize: '12px', fontWeight: '400', margin: '8px 6px 0px 8px' }}
                >
                  Documentation 
                </Button>
                <Container w={127} h={105}style={{float: 'right'}}>
                  <Text>Examples</Text>
                  <Button h={32} w={125}>KYB report</Button>
                  <Button h={32} w={125}>Business report</Button>
                </Container>
              </Container>
   
              <Container style={{ ...utilityClasses.featureContainer, marginTop: '12px' }}>
                <Text style={{ ...utilityClasses.sectionTitle, marginLeft: '8px' }}>Company search</Text>
                <Text style={{ ...utilityClasses.bodyText, marginLeft: '8px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
                <Button 
                  style={{
                    ...utilityClasses.accentButton,
                    width: '89px',
                    margin: '8px 6px 0px 8px'
                  }}
                >
                  Open
                </Button>
                <Button 
                  h={32} 
                  w={125} 
                  variant="default" 
                  style={{ fontSize: '12px', fontWeight: 400, margin: '8px 6px 0px 8px' }}
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