import { IUser } from "./i-user";

export interface IPost {
  idPost?: String;
  judulPost?: String;
  email?: String;
  deskripsi?: String;
  upvote?: number;
  fotoKonten?: String;
  tanggalPost: String;
  user: IUser;
}
