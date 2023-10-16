import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { IUser } from '../interfaces/i-user';

export class User implements IUser {
  idUser?: Number = parseInt(localStorage.getItem('userid') || '0');
  userName?: String;
  email?: String;
  password?: String;
  name?: String;
  fotoUser?: String;
  jenisKelamin?: String;
  token?: String;
}
