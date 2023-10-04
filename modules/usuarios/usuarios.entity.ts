import {
	BeforeInsert,
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

import bcrypt from 'bcrypt';
import { Noticia } from '../noticias/noticia.entity';

@Entity()
export class Usuarios {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ unique: true })
	email: string;

	@Column()
	pass: string;

	@Column()
	nombre: string;

	@Column()
	apellido: string;

	@CreateDateColumn()
	create_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@BeforeInsert()
	async hashPassword() {
		this.pass = await bcrypt.hash(this.pass, 10);
	}
	
	@OneToMany(() => Usuarios, (u) => u.noticia)
	noticia: Noticia[];

	
	//probar si esta bien, cooregir y probar
	 // un usuario para muchas noticias
	 //correr el orm


}
