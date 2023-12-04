import { ColorRing } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
      wrapperClass="blocks-wrapper"
      colors={['#1C3144', '#A2AEBB', '#3F88C5', '#587B7F', '#669BBC']}
    />
  );
};
