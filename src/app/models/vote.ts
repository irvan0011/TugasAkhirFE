import { IPost } from '../interfaces/i-post';
import { IUser } from '../interfaces/i-user';
import { IVote } from '../interfaces/i-vote';
import { Post } from './post';
import { User } from './user';

export class Vote implements IVote {
  idVote?: Number;
  isVote?: Boolean = true;
  post?: IPost = new Post();
  user?: IUser = new User();
}
