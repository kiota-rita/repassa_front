import { Tema } from "./Tema"
import { User } from "./User"

export class Postagem {
    public id: number
    public img: string
    public titulo: string
    public texto: string
    public data: Date
    public email: User
    public tema: Tema
    
}