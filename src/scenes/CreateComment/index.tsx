import { Formik, FormikHelpers } from "formik";
import React from "react";
import { CommentApi } from "../../api";
import { CommentPostInfo } from "../../utils";
import CreateComment from "./CreateComment";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

const CreateUserContainer: React.FC = () => {
  const history = useHistory();

  const initialValues = {
    post_id: 0,
    name: "",
    email: "",
    body: "",
  };

  const onSubmit = (
    values: CommentPostInfo,
    { setSubmitting }: FormikHelpers<CommentPostInfo>
  ) => {
    addUser(values);
  };

  const addUser = async (values: CommentPostInfo): Promise<void> => {
    try {
      const userAdd = await CommentApi.addComment(values);
      history.push("/");
      console.log(userAdd);
    } catch ({ message }) {
      console.error("Erro", message);
    }
  };

  const SignupSchema = Yup.object().shape({
    post_id: Yup.number().required("*Campo obrigatório"),
    name: Yup.string().required("*Campo obrigatório"),
    email: Yup.string().email("Email inválido").required("*Campo obrigatório"),
    body: Yup.string().required("*Campo obrigatório"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={onSubmit}
    >
      <CreateComment />
    </Formik>
  );
};
export default CreateUserContainer;
