import { CommentCreateResponse, CommentPostInfo, CommentViewResponse} from "../../utils";
import request from "../request";

export default class CommentApi {
    static addComment = async (comment: CommentPostInfo):Promise<CommentCreateResponse> => {
        try{
            const {data} = await request.post('/comments', comment)                
            return data;
        } catch ({message}){
            throw new Error(message)
        }
    } 
    static viewCommentList = async ():Promise<CommentViewResponse> => {
        try{
            const {data} = await request.get(`/comments`)
            return data;
        } catch ({message}){
            throw new Error
        }
    };


}
   /* static updateUser = async (id: string, user: UserInfo):Promise<UserCreateResponse> => {//sempre que for alterar usuario tem que mandar id mais infos que for alterar
        try{
            const {data} = await request.put(`/users/${id}`, user)
            return data; 
          } catch ({message}){
              throw new Error
          }
        }

    static viewUser = async (id: string):Promise<UserCreateResponse> => {
        try{
            const {data} = await request.get(`/users/${id}`)
            return data;
        } catch ({message}){
            throw new Error
        }
    } 



    static deleteUser = async (id: string):Promise<UserDeleteResponse> => {
        try{
            const {data} = await request.delete(`/users/${id}`)
            return data;
        } catch ({message}){
            throw new Error
        }
    };
};  */