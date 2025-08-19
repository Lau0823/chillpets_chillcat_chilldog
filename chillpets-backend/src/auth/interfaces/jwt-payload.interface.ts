// src/auth/interfaces/jwt-payload.interface.ts
import { Rol } from '../../common/enums/rol.enum';

export interface JwtPayload {
  email: string;
  sub: string; // El id del usuario
  rol: Rol;
}