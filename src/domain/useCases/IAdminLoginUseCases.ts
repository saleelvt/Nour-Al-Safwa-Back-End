
import { AdminEntity } from "../entities"

export interface ILoginAdminUseCase{
    execute(email:string,password:string):Promise<AdminEntity|null>
}
