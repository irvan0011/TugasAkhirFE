import { IPost } from '../interfaces/i-post';
import { IUser } from '../interfaces/i-user';
import { User } from './user';

export class Post implements IPost {
  idPost?: Number;
  judulPost: String = '';
  email: String = '';
  deskripsi: String = '';
  upvote?: number = 0;
  fotoKonten?: String = '';
  tanggalPost?: Date = new Date();
  user?: IUser = new User();
}
