import { IPost } from './i-post';
import { IUser } from './i-user';

export interface IReply {
  idReply?: Number;
  comment?: String;
  user?: IUser;
  post?: IPost;
  tanggalReply?: Date;
}
