import { Button, Column, Heading, Icon, Meta, Row, Schema, Text } from "@once-ui-system/core";
import { baseURL, contact, person, social } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: contact.title,
    description: contact.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(contact.title)}`,
    path: contact.path,
  });
}

export default function Contact() {
  const linkedIn = social.find((item) => item.name === "LinkedIn");

  return (
    <Column maxWidth="s">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={contact.title}
        description={contact.description}
        path={contact.path}
        image={`/api/og/generate?title=${encodeURIComponent(contact.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${contact.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth paddingTop="24" gap="24">
        <Heading variant="display-strong-l">{contact.label}</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          N'hésitez pas à me contacter par l'un de ces moyens.
        </Text>

        <Column fillWidth gap="16" marginTop="16">
          {contact.phone && (
            <Row gap="12" vertical="center">
              <Icon name="phone" onBackground="brand-medium" />
              <Text variant="body-default-l">{contact.phone}</Text>
            </Row>
          )}
          <Row gap="12" vertical="center">
            <Icon name="email" onBackground="brand-medium" />
            <Text variant="body-default-l">{person.email}</Text>
          </Row>
          {linkedIn && (
            <Row gap="12" vertical="center">
              <Icon name="linkedin" onBackground="brand-medium" />
              <Text variant="body-default-l">{linkedIn.link}</Text>
            </Row>
          )}
          {contact.location && (
            <Row gap="12" vertical="center">
              <Icon name="mapPin" onBackground="brand-medium" />
              <Text variant="body-default-l">{contact.location}</Text>
            </Row>
          )}
        </Column>

        <Row gap="12" wrap paddingTop="16">
          <Button
            href={`mailto:${person.email}`}
            variant="secondary"
            size="m"
            prefixIcon="email"
            label="M'envoyer un email"
          />
          {linkedIn && (
            <Button
              href={linkedIn.link}
              variant="secondary"
              size="m"
              prefixIcon="linkedin"
              label="Voir mon LinkedIn"
            />
          )}
        </Row>
      </Column>
    </Column>
  );
}
