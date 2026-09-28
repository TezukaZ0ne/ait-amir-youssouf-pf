import { Fragment } from "react";
import { Column, Flex, Icon, Row, SmartLink, Tag, Text } from "@once-ui-system/core";
import type { TimelineItem } from "@/types";
import styles from "./Timeline.module.scss";

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className={styles.timeline}>
      {items.map((item, index) => (
        <li key={`${item.title}-${index}`} className={styles.item}>
          <Column fillWidth gap="12">
            <Row fillWidth horizontal="between" vertical="start" gap="8" wrap>
              <Column gap="4" flex={1} minWidth={0}>
                <Text id={item.title} variant="heading-strong-l">
                  {item.title}
                </Text>
                {item.subtitle && (
                  <Text variant="heading-strong-s" onBackground="brand-weak">
                    {item.subtitle}
                  </Text>
                )}
              </Column>
              <Tag size="l" background="neutral-alpha-weak">
                {item.period}
              </Tag>
            </Row>

            <Text variant="body-default-m" onBackground="neutral-weak" style={{ fontStyle: "italic" }}>
              {item.place}
              {item.location ? ` — ${item.location}` : ""}
            </Text>

            {item.summary && <Text variant="body-default-m">{item.summary}</Text>}

            {item.bullets && item.bullets.length > 0 && (
              <Column as="ul" gap="8" className={styles.bullets}>
                {item.bullets.map((bullet, i) => (
                  <Text as="li" variant="body-default-m" key={`${item.title}-b-${i}`}>
                    {bullet}
                  </Text>
                ))}
              </Column>
            )}

            {item.tools && item.tools.length > 0 && (
              <div className={styles.tools}>
                {item.tools.map((group) => (
                  <Fragment key={`${item.title}-${group.label}`}>
                    <Text variant="label-default-s" onBackground="neutral-weak">
                      {group.label}
                    </Text>
                    <Flex wrap gap="8">
                      {group.tags.map((tag) => (
                        <Tag key={tag} size="m">
                          {tag}
                        </Tag>
                      ))}
                    </Flex>
                  </Fragment>
                ))}
              </div>
            )}

            {item.link && (
              <SmartLink href={item.link.href}>
                <Row gap="8" vertical="center">
                  <Text variant="label-default-s">{item.link.label}</Text>
                  <Icon name="arrowRight" size="xs" />
                </Row>
              </SmartLink>
            )}
          </Column>
        </li>
      ))}
    </ol>
  );
}
