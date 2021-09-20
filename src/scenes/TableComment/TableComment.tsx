import React from "react";
import { Popconfirm, Table } from "antd";
import { DeleteOutlined, FormOutlined } from "@ant-design/icons";
import { CommentData } from "../../utils";
import { Link } from "react-router-dom";
import { Header } from "../../components";
import {
  Container,
  Del,
  Edit,
  Actions,
  Column,
  TableContainer,
  TitleUsers,
  Title,
  AddUser,
} from "./styles";

type Props = {
  dataSource: CommentData[];
};

const TableUser: React.FC<Props> = ({ dataSource }) => {
  return (
    <Container>
      <Header />
      <TitleUsers>
        <Title key="key_title">Comentários</Title>
        <AddUser>Add</AddUser>
      </TitleUsers>
      <TableContainer>
        <Table<CommentData> dataSource={dataSource}>
          <Column title="Nome" dataIndex="name" key="key_name" />
          <Column title="Email" dataIndex="email" key="key_email" />
          <Column title="Body" dataIndex="body" key="key_body" />
          <Column title="Post_ID" dataIndex="post_id" key="key_post_id" />
          <Column<CommentData>
            title="Action"
            key="action"
            render={(record) => (
              <Actions key="key_action">
                <Link to={`/edit/${record.id}`}>
                  <Edit>
                    <FormOutlined />
                  </Edit>
                </Link>
                <Del>
                  <Popconfirm
                    title="Excluir usuário?"
                    cancelText="Cancelar"
                    okText="Confirmar"
                  >
                    <DeleteOutlined />
                  </Popconfirm>
                </Del>
              </Actions>
            )}
          />
        </Table>
      </TableContainer>
    </Container>
  );
};
export default TableUser;

{
  /* <Edit onClick={handleClickEdit}> Go Edit </Edit>
<Create onClick={handleClickCreate}> Go Create </Create> */
}
