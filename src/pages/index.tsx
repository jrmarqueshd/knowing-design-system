import Icon from 'components/Icon';
import { Text, Heading } from 'styles/typograph';

export default function Home() {
  return (
    <>
      <Heading>Titulo feliz e elegante</Heading>

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
        laboriosam optio earum aliquam rerum accusantium quas, commodi quo
        deserunt placeat nobis a? Ipsa, repudiandae quos quasi adipisci
        blanditiis debitis quod!
      </Text>

      <Icon icon="AddressBook" color="$infoMain" />
    </>
  );
}
