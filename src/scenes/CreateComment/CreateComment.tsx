import { useFormikContext, FormikProps } from "formik";
import React from "react";
import { user } from "../../assets";
import { CommentPostInfo } from "../../utils";
import { Header } from "../../components";
import {
  Container,
  FormAdd,
  Title,
  DivAddUser,
  TitlePage,
  DivTitlePage,
  Wrapper,
  UserLogo,
  AddUserButton,
  TitleField,
  UserField,
  DivUserField,
  ErrorMessage,
} from "./styles";

const CreateComment: React.FC = () => {
  const { handleChange, errors, touched }: FormikProps<CommentPostInfo> =
    useFormikContext(); //Como não vamos usar Field do formik, Hook: handleChange resolve o nosso submit.

  return (
    <Wrapper>
      <Header />
      <DivTitlePage>
        <UserLogo src={user} />
        <TitlePage>adicionar novo usuário</TitlePage>
      </DivTitlePage>
      <Container>
        <FormAdd>
          <Title htmlFor="post_id">Post_ID</Title>
          <DivUserField>
            <UserField name="post_id" id="post_id" onChange={handleChange} />
            {errors.post_id && touched.post_id ? (
              <ErrorMessage>{errors.post_id}</ErrorMessage>
            ) : null}
          </DivUserField>

          <Title htmlFor="name">Nome</Title>
          <DivUserField>
            <UserField name="name" id="name" onChange={handleChange} />
            {errors.name && touched.name ? (
              <ErrorMessage>{errors.name}</ErrorMessage>
            ) : null}
          </DivUserField>

          <Title htmlFor="email">Email </Title>
          <DivUserField>
            <UserField name="email" id="email" onChange={handleChange} />
            {errors.email && touched.email ? (
              <ErrorMessage>{errors.email}</ErrorMessage>
            ) : null}
          </DivUserField>

          <Title htmlFor="body">Body</Title>
          <DivUserField>
            <UserField name="body" id="body" onChange={handleChange} />
            {errors.body && touched.body ? (
              <ErrorMessage>{errors.body}</ErrorMessage>
            ) : null}
          </DivUserField>

          <DivAddUser>
            <AddUserButton type="submit">
              <TitleField>adicionar</TitleField>
            </AddUserButton>
          </DivAddUser>
        </FormAdd>
      </Container>
    </Wrapper>
  );
};
export default CreateComment;
