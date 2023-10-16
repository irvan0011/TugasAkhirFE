import { List } from 'postcss/lib/list';
import { IReply } from './i-reply';
import { IUser } from './i-user';

export interface IPost {
  idPost?: Number;
  judulPost?: String;
  email?: String;
  deskripsi?: String;
  upvote?: number;
  listReply?: Array<IReply>;
  fotoKonten?: String | null;
  tanggalPost?: Date;
  user?: IUser;
}
