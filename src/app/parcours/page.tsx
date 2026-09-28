import {
  Button,
  Column,
  Grid,
  Heading,
  Icon,
  Meta,
  Row,
  Schema,
  Tag,
  Text,
} from "@once-ui-system/core";
import { baseURL, parcours, person } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import { Timeline } from "@/components/parcours/Timeline";

export async function generateMetadata() {
  return Meta.generate({
    title: parcours.title,
    description: parcours.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(parcours.title)}`,
    path: parcours.path,
  });
}

export default function Parcours() {
  const structure = [
    {
      title: parcours.studies.title,
      display: parcours.studies.display,
      items: parcours.studies.items.map((item) => item.title),
    },
    {
      title: parcours.work.title,
      display: parcours.work.display,
      items: parcours.work.items.map((item) => item.title),
    },
    {
      title: parcours.skills.title,
      display: parcours.skills.display,
      items: parcours.skills.groups.map((group) => group.title),
    },
    {
      title: parcours.strengths.title,
      display: parcours.strengths.display,
      items: [],
    },
    {
      title: parcours.languages.title,
      display: parcours.languages.display,
      items: [],
    },
    {
      title: parcours.interests.title,
      display: parcours.interests.display,
      items: [],
    },
  ];

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={parcours.title}
        description={parcours.description}
        path={parcours.path}
        image={`/api/og/generate?title=${encodeURIComponent(parcours.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${parcours.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <TableOfContents
        structure={structure}
        about={{ tableOfContent: { display: true, subItems: false } }}
      />
      <Column fillWidth maxWidth={40} paddingTop="24" gap="48">
        {/* En-tête : profil */}
        <Column fillWidth gap="20">
          <Heading variant="display-strong-l">{parcours.label}</Heading>
          <Column
            fillWidth
            gap="20"
            padding="24"
            radius="l"
            background="surface"
            border="neutral-alpha-medium"
          >
            <Text variant="body-default-l" style={{ fontStyle: "italic" }}>
              {parcours.profile.text}
            </Text>
            <Row wrap gap="8">
              {parcours.profile.facts.map((fact) => (
                <Tag key={fact.label} size="l" prefixIcon={fact.icon}>
                  {fact.label}
                </Tag>
              ))}
            </Row>
            <Row>
              <Button
                href={parcours.profile.cv.href}
                target="_blank"
                variant="primary"
                size="m"
                prefixIcon="download"
                arrowIcon
              >
                {parcours.profile.cv.label}
              </Button>
            </Row>
          </Column>
        </Column>

        {/* Formation */}
        {parcours.studies.display && (
          <Column fillWidth gap="24">
            <Heading as="h2" id={parcours.studies.title} variant="display-strong-s">
              {parcours.studies.title}
            </Heading>
            <Timeline items={parcours.studies.items} />
          </Column>
        )}

        {/* Expérience */}
        {parcours.work.display && (
          <Column fillWidth gap="24">
            <Heading as="h2" id={parcours.work.title} variant="display-strong-s">
              {parcours.work.title}
            </Heading>
            <Timeline items={parcours.work.items} />
          </Column>
        )}

        {/* Compétences techniques */}
        {parcours.skills.display && (
          <Column fillWidth gap="24">
            <Heading as="h2" id={parcours.skills.title} variant="display-strong-s">
              {parcours.skills.title}
            </Heading>
            <Grid columns="2" s={{ columns: 1 }} gap="16" fillWidth>
              {parcours.skills.groups.map((group) => (
                <Column
                  key={group.title}
                  fillWidth
                  gap="16"
                  padding="24"
                  radius="l"
                  background="surface"
                  border="neutral-alpha-medium"
                >
                  <Row gap="12" vertical="center">
                    <Icon name={group.icon} size="m" onBackground="brand-weak" />
                    <Text id={group.title} variant="heading-strong-m">
                      {group.title}
                    </Text>
                  </Row>
                  {group.description && (
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {group.description}
                    </Text>
                  )}
                  <Row wrap gap="8">
                    {group.tags.map((tag) => (
                      <Tag key={`${group.title}-${tag.name}`} size="m" prefixIcon={tag.icon}>
                        {tag.name}
                      </Tag>
                    ))}
                  </Row>
                </Column>
              ))}
            </Grid>
          </Column>
        )}

        {/* Atouts */}
        {parcours.strengths.display && (
          <Column fillWidth gap="24">
            <Heading as="h2" id={parcours.strengths.title} variant="display-strong-s">
              {parcours.strengths.title}
            </Heading>
            <Grid columns="2" s={{ columns: 1 }} gap="16" fillWidth>
              {parcours.strengths.items.map((item) => (
                <Row
                  key={item.title}
                  fillWidth
                  gap="16"
                  vertical="start"
                  padding="20"
                  radius="l"
                  background="surface"
                  border="neutral-alpha-medium"
                >
                  <Icon name={item.icon} size="m" onBackground="brand-weak" />
                  <Column gap="4" flex={1} minWidth={0}>
                    <Text variant="heading-strong-s">{item.title}</Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {item.description}
                    </Text>
                  </Column>
                </Row>
              ))}
            </Grid>
          </Column>
        )}

        {/* Langues */}
        {parcours.languages.display && (
          <Column fillWidth gap="24">
            <Heading as="h2" id={parcours.languages.title} variant="display-strong-s">
              {parcours.languages.title}
            </Heading>
            <Row wrap gap="16">
              {parcours.languages.items.map((language) => (
                <Row
                  key={language.name}
                  gap="12"
                  vertical="center"
                  paddingY="12"
                  paddingX="20"
                  radius="l"
                  background="surface"
                  border="neutral-alpha-medium"
                >
                  <Icon name="language" size="s" onBackground="brand-weak" />
                  <Text variant="heading-strong-s">{language.name}</Text>
                  <Tag size="m">{language.level}</Tag>
                </Row>
              ))}
            </Row>
          </Column>
        )}

        {/* Centres d'intérêt */}
        {parcours.interests.display && (
          <Column fillWidth gap="24" paddingBottom="40">
            <Heading as="h2" id={parcours.interests.title} variant="display-strong-s">
              {parcours.interests.title}
            </Heading>
            <Grid columns="3" m={{ columns: 2 }} s={{ columns: 1 }} gap="16" fillWidth>
              {parcours.interests.items.map((item) => (
                <Column
                  key={item.title}
                  fillWidth
                  gap="8"
                  padding="20"
                  radius="l"
                  background="surface"
                  border="neutral-alpha-medium"
                >
                  <Icon name={item.icon} size="m" onBackground="brand-weak" />
                  <Text variant="heading-strong-s">{item.title}</Text>
                  {item.description && (
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {item.description}
                    </Text>
                  )}
                </Column>
              ))}
            </Grid>
          </Column>
        )}
      </Column>
    </Column>
  );
}
