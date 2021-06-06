import { Tema } from "./Tema"
import { User } from "./User"

export class Postagem {
    public id: number
    public img1: string
    public img2: string
    public conteudo: string
    public data: Date
    public user: User
    public tema: Tema
    
}