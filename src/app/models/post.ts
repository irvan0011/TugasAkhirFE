import { IPost } from '../interfaces/i-post';
import { IReply } from '../interfaces/i-reply';
import { IUser } from '../interfaces/i-user';
import { Reply } from './reply';
import { User } from './user';

export class Post implements IPost {
  idPost?: Number;
  judulPost: String = '';
  email: String = '';
  deskripsi: String = '';
  upvote?: number = 0;
  listReply?: Array<IReply> = new Array<Reply>();
  tanggalPost?: Date = new Date();
  user?: IUser = new User();
}
