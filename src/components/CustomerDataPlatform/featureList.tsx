import { Button, Container, Image, Title } from '@mantine/core';

//const sdkID = '6267fcf5-fe32-4235-bc77-9e0d5ee326f0';

const featureItem = () => {
  return (
    <Container h={116} w={607}>
      <Image src="src/assets/bg-placeholder.jpg" h={90} w={90} />

      <Container>
        <Container>
          <Title order={5}>Product name #1</Title>
          <Title order={6}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Title>
        </Container>

        <Container>
          <Button>
            Open
          </Button>
          <Button
            onClick={() =>
              window.open(
                'https://ondato.atlassian.net/wiki/spaces/PUB/pages/3016392748/Web+SDK+integration',
                '_blank'
              )
            }
            variant="default"
          >
            Documentation
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default featureItem;
