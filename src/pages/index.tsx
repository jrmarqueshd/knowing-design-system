import Accordion from 'components/Accordion';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Tag from 'components/Tag';
import { Flex, Grid, Separator } from 'styles/layout';
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

      <Flex>
        <Tag label="Tag" type="danger" icon="ChatCircle" />
        <Tag label="Tag" type="disabled" />
        <Tag label="Tag" type="info" icon="ChatCircle" />
        <Tag label="Tag" type="primary" icon="ChatCircle" />
        <Tag label="Tag" type="success" icon="ChatCircle" />
        <Tag label="Tag" type="warning" icon="ChatCircle" />
      </Flex>

      <Separator />

      <Grid columns={4}>
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

      <Separator />

      <Flex>
        <Button format="primary" icon="CircleWavyCheck">
          Button
        </Button>
        <Button format="primary">Button</Button>
        <Button format="primary" icon="CircleWavyCheck" />
      </Flex>

      <Separator />

      <Flex>
        <Button format="secondary" icon="CircleWavyCheck">
          Button
        </Button>
        <Button format="secondary">Button</Button>
        <Button format="secondary" icon="CircleWavyCheck" />
      </Flex>

      <Separator />

      <Flex>
        <Button format="outline" icon="CircleWavyCheck">
          Button
        </Button>
        <Button format="outline">Button</Button>
        <Button format="outline" icon="CircleWavyCheck" />
      </Flex>

      <Separator />

      <Flex>
        <Button format="text" icon="CircleWavyCheck">
          Button
        </Button>
        <Button format="text">Button</Button>
        <Button format="text" icon="CircleWavyCheck" />
      </Flex>

      <Separator />

      <Flex>
        <Button format="primary" icon="CircleWavyCheck" disabled>
          Button
        </Button>
        <Button format="primary" disabled>
          Button
        </Button>
        <Button format="primary" icon="CircleWavyCheck" disabled />
      </Flex>

      <Separator />

      <Flex>
        <Button format="text" icon="CircleWavyCheck" disabled>
          Button
        </Button>
        <Button format="text" disabled>
          Button
        </Button>
        <Button format="text" icon="CircleWavyCheck" disabled />{' '}
      </Flex>
    </>
  );
}
