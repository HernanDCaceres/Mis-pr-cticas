import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { Vehicle } from "./Vehicule"

@Entity({
    name: "users"
})

export class User {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({
        length: 100
    })
    name: string
    
    @Column()
    email: string
    
    @Column("integer")
    age: number
    
    @Column()
    active: boolean

    @OneToMany(() => Vehicle, (vehicle => vehicle.user))
    vehicles: Vehicle[]

}
