

import { ILoginAdminUseCase } from "@/domain/useCases/IAdminLoginUseCases"
import { IAdminDependencies } from "./IAdminDependencies"

export interface IAdminUseCases{
    loginAdminUseCase:(dependencies:IAdminDependencies)=> ILoginAdminUseCase
}