import { IPost } from '../interfaces/i-post';
import { IReply } from '../interfaces/i-reply';
import { IUser } from '../interfaces/i-user';
import { Post } from './post';
import { User } from './user';

export class Reply implements IReply {
  comment?: String = '';
  user?: IUser = new User();
  post?: IPost = new Post();
  tanggalReply?: Date = new Date();
}
