import {
  Header,
  Form,
  FormButton,
  FormLabel,
  FormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <Form onSubmit={onSubmit}>
        <FormButton type="submit">
          <FormLabel></FormLabel>
        </FormButton>

        <FormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
      </Form>
    </Header>
  );
};
