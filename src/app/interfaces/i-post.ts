import { IUser } from './i-user';

export interface IPost {
  idPost?: Number;
  judulPost?: String;
  email?: String;
  deskripsi?: String;
  upvote?: number;
  fotoKonten?: String;
  tanggalPost?: Date;
  user?: IUser;
}
