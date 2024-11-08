

import { ILoginAdminUseCase } from "@/domain/useCases/IAdminLoginUseCases"
import { IAdminDependencies } from "./IAdminDependencies"

export interface IAdminUseCases{
    loginAdminUseCases:(dependencies:IAdminDependencies)=> ILoginAdminUseCase
}