import { useTranslation } from 'react-i18next';
import { Button, Flex, Group, Tabs, Title } from '@mantine/core';

export function BusinessIntelligence(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Tabs.Panel value="businessInteligence" w={1042} h={734} p={24}>
      <Group gap={32}>
        <Group gap={4} w={677}>
          <Title order={4}>{t('BusinessIntelligence.Title')}</Title>
          <Title order={6}>{t('BusinessIntelligence.Description')}</Title>
        </Group>
        <Group gap={12}>
          <Flex
            justify="space-between"
            align="center"
            gap={8}
            p={24}
            w={988}
            style={{ backgroundColor: '#F9FAFC', borderRadius: '8px' }}
          >
            <Group gap={12}>
              <Flex direction="column" gap={8}>
                <Title order={4}>{t('BusinessIntelligenceReport.Title')}</Title>
                <Title order={6} w={650}>
                  {t('BusinessIntelligenceReport.Description')}
                </Title>
              </Flex>
              <Group>
                <Button>{t('Button.Open')}</Button>
                <Button variant="default">{t('Button.Documentation')}</Button>
              </Group>
            </Group>
            <Flex direction="column" gap={12} w={127}>
              <Title order={5}>{t('Button.Examples')}</Title>
              <Button variant="secondary">{t('Button.KYBReport')}</Button>
              <Button variant="secondary">{t('Button.BusinessReport')}</Button>
            </Flex>
          </Flex>

          <Flex
            direction="column"
            gap={12}
            p={24}
            w={988}
            style={{ backgroundColor: '#F9FAFC', borderRadius: '8px' }}
          >
            <Title order={4}>{t('BusinessIntelligenceSearch.Title')}</Title>
            <Title order={6} w={650}>
              {t('BusinessIntelligenceSearch.Description')}
            </Title>
            <Group>
              <Button>{t('Button.Open')}</Button>
              <Button variant="default">{t('Button.Documentation')}</Button>
            </Group>
          </Flex>
        </Group>
      </Group>
    </Tabs.Panel>
  );
}
