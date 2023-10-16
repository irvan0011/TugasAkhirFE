import { IPost } from './i-post';
import { IUser } from './i-user';

export interface IVote {
  idVote?: Number;
  post?: IPost;
  user?: IUser;
  isVote?: Boolean;
}
