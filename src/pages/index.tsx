import Accordion from 'components/Accordion';
import Icon from 'components/Icon';
import Tag from 'components/Tag';
import { Grid, Separator } from 'styles/layout';
import { styled } from 'styles/theme';
import { Text, Heading } from 'styles/typograph';

export default function Home() {
  return (
    <>
      <Heading>Titulo feliz e elegante</Heading>

      <Separator />

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
        laboriosam optio earum aliquam rerum accusantium quas, commodi quo
        deserunt placeat nobis a? Ipsa, repudiandae quos quasi adipisci
        blanditiis debitis quod!
      </Text>

      <Separator />

      <Icon name="AddressBook" color="$infoMain" />

      <Separator />

      <Tag label="Tag" type="danger" icon="ChatCircle" />
      <Tag label="Tag" type="disabled" />
      <Tag label="Tag" type="info" icon="ChatCircle" />
      <Tag label="Tag" type="primary" icon="ChatCircle" />
      <Tag label="Tag" type="success" icon="ChatCircle" />
      <Tag label="Tag" type="warning" icon="ChatCircle" />

      <Separator />

      <Grid columns={3}>
        <Accordion
          items={[
            {
              header: 'Lorem ipsum dolor sit amet.',
              body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique laboriosam optio earum aliquam rerum accusantium quas, commodi quo deserunt placeat nobis a? Ipsa, repudiandae quos quasi adipisci blanditiis debitis quod!',
            },
            {
              header: 'Color sit hasmuf ipsum lorem',
              body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique laboriosam optio earum aliquam rerum accusantium quas, commodi quo deserunt placeat nobis a? Ipsa, repudiandae quos quasi adipisci blanditiis debitis quod!',
            },
          ]}
        />
        <Accordion
          items={[
            {
              header: 'Lorem ipsum dolor sit amet.',
              body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique laboriosam optio earum aliquam rerum accusantium quas, commodi quo deserunt placeat nobis a? Ipsa, repudiandae quos quasi adipisci blanditiis debitis quod!',
            },
            {
              header: 'Color sit hasmuf ipsum lorem',
              body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique laboriosam optio earum aliquam rerum accusantium quas, commodi quo deserunt placeat nobis a? Ipsa, repudiandae quos quasi adipisci blanditiis debitis quod!',
            },
          ]}
        />
      </Grid>
    </>
  );
}
