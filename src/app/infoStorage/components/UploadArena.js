import { Segment, Icon, Button, Header } from "semantic-ui-react";

const UploadArena = () => {
  return (
    <Segment placeholder>
      <Header icon>
        <Icon name="pdf file outline" />
        Upload files by dropping them here.
      </Header>
      <Button primary>Add Files</Button>
    </Segment>
  );
};

export default UploadArena;
