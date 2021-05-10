import MeHeader from 'components/meHeader/meHeader';
import MeTextSection from 'components/meTextSection/meTextSection';

const Me: React.FC = () => {
  return (
    <>
      <MeHeader />
      <MeTextSection
        title={'Who am I?'}
        text={[
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec efficitur erat. Aenean lobortis mauris sit amet mattis malesuada. Duis tincidunt fringilla neque, at pellentesque velit. Nunc bibendum quis purus sit amet pulvinar. In nec pharetra dui. Cras rutrum erat at orci auctor ultrices. Proin at neque sed orci efficitur volutpat sit amet sit amet elit. Praesent quis dolor tincidunt, scelerisque nisl nec, tempor odio. Proin a pretium tellus. Phasellus sed augue nisi. Nulla in aliquet tortor. Aliquam purus lacus, auctor sit amet auctor quis, consequat quis nulla.',
          'Nunc placerat nec dolor quis sollicitudin. Phasellus sollicitudin velit nec vehicula elementum. Proin eu diam eu nisi rhoncus mollis. Vivamus vitae eros eu eros elementum feugiat ac non elit. Etiam vestibulum tellus diam, quis imperdiet odio tempor ut. Curabitur accumsan ligula et elit maximus, vel sollicitudin metus condimentum. Duis id lacinia dui. Praesent quis tellus vestibulum, bibendum tellus sit amet, posuere justo. Duis dapibus, augue in luctus accumsan, lectus libero venenatis augue, feugiat rhoncus eros felis et orci. Ut maximus lobortis aliquam. Praesent condimentum urna eu facilisis bibendum. Nullam a rhoncus mi, id pellentesque odio.',
        ]}
      />
    </>
  );
};

export default Me;
