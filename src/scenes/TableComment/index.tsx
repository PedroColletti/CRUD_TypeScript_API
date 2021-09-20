import React from "react";
import { useEffect, useState } from "react";
import { CommentApi } from "../../api";
import { CommentData } from "../../utils";
import TableComment from "./TableComment";
import { useHistory } from "react-router-dom";

const TableUserContainer: React.FC = () => {
  const [dataSource, setDataSource] = useState<CommentData[]>([]);
  const history = useHistory();

  const handleClick = () => {
    history.push("/create");
  };

  const viewCommentList = async (): Promise<void> => {
    try {
      const userInfo = await CommentApi.viewCommentList(); //função que retorna dados
      setDataSource(userInfo.data);
    } catch ({ message }) {
      console.error("Erro", message);
    }
  };

  /*   const deleteUser = async (id: string): Promise<void> => {
    try {
      const userDelete = await CommentApi.deleteUser(id);
      viewCommentList();
      console.log(userDelete);
    } catch ({ message }) {
      console.error("Erro", message);
    }
  };
 */
  useEffect(() => {
    viewCommentList();
  }, []);

  return <TableComment dataSource={dataSource} />;
};
export default TableUserContainer;
