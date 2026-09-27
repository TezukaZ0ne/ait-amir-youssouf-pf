import { Column, Heading, Meta, Row, Schema, Tag, Text } from "@once-ui-system/core";
import { baseURL, parcours, person } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";

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
      items: parcours.studies.institutions.map((institution) => institution.name),
    },
    {
      title: parcours.work.title,
      display: parcours.work.display,
      items: parcours.work.experiences.map((experience) => experience.company),
    },
    {
      title: parcours.skills.title,
      display: parcours.skills.display,
      items: parcours.skills.skills.map((skill) => skill.title),
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
      <Column fillWidth maxWidth={40} paddingTop="24">
        <Heading variant="display-strong-l" marginBottom="24">
          {parcours.label}
        </Heading>

        {parcours.studies.display && (
          <>
            <Heading as="h2" id={parcours.studies.title} variant="display-strong-s" marginBottom="m">
              {parcours.studies.title}
            </Heading>
            <Column fillWidth gap="l" marginBottom="40">
              {parcours.studies.institutions.map((institution, index) => (
                <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                  <Text id={institution.name} variant="heading-strong-l">
                    {institution.name}
                  </Text>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {institution.description}
                  </Text>
                </Column>
              ))}
            </Column>
          </>
        )}

        {parcours.work.display && (
          <>
            <Heading as="h2" id={parcours.work.title} variant="display-strong-s" marginBottom="m">
              {parcours.work.title}
            </Heading>
            <Column fillWidth gap="l" marginBottom="40">
              {parcours.work.experiences.map((experience, index) => (
                <Column key={`${experience.company}-${index}`} fillWidth>
                  <Row fillWidth horizontal="between" vertical="end" marginBottom="4" wrap>
                    <Text id={experience.company} variant="heading-strong-l">
                      {experience.company}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {experience.timeframe}
                    </Text>
                  </Row>
                  <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                    {experience.role}
                  </Text>
                  <Column as="ul" gap="12">
                    {experience.achievements.map((achievement, i) => (
                      <Text as="li" variant="body-default-m" key={`${experience.company}-${i}`}>
                        {achievement}
                      </Text>
                    ))}
                  </Column>
                </Column>
              ))}
            </Column>
          </>
        )}

        {parcours.skills.display && (
          <>
            <Heading as="h2" id={parcours.skills.title} variant="display-strong-s" marginBottom="m">
              {parcours.skills.title}
            </Heading>
            <Column fillWidth gap="l">
              {parcours.skills.skills.map((skill, index) => (
                <Column key={`${skill.title}-${index}`} fillWidth gap="4">
                  <Text id={skill.title} variant="heading-strong-l">
                    {skill.title}
                  </Text>
                  {skill.description && (
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                  )}
                  {skill.tags && skill.tags.length > 0 && (
                    <Row wrap gap="8" paddingTop="8">
                      {skill.tags.map((tag, tagIndex) => (
                        <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                          {tag.name}
                        </Tag>
                      ))}
                    </Row>
                  )}
                </Column>
              ))}
            </Column>
          </>
        )}
      </Column>
    </Column>
  );
}
