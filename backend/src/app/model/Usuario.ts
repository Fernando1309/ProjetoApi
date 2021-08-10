import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm";
import bcrypt from "bcryptjs";

@Entity('Usuario') //decoration executa o codigo a baixo como uma funão;
class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashSenha() {
    this.senha = bcrypt.hashSync(this.senha,8);
  }
}
export { Usuario };