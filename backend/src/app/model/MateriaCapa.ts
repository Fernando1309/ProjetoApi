import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('MateriaCapa')
class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({length: 100})
  title: string;

  @Column({length: 100})
  descricao: string;

  @Column({length: 1000})
  conteudo: string;

  @Column({length: 100})
  palavraChave: string;

  @Column({type: "text"})
  imageCapa;

  @Column({length: 600})
  linkVideo: string;

  @Column({length: 1000})
  textPrincipal: string;

  @Column({length: 1000})
  textSec: string;

  @Column({length: 1000})
  textThird: string;


}
export { Usuario };
