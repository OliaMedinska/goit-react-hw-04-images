import { Button } from './Button.styled';

export const LoaderButton = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      Load more
    </Button>
  );
};
