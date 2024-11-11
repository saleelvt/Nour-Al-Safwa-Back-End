
import { AdminEntity } from "@/domain/entities";

export interface IAdminRepositories {
    adminFindByEmail:(email:string)=> Promise<AdminEntity|null> 
}