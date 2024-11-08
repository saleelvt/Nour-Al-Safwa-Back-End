import { adminController } from '@/presentation/admin/controllers';
import { IAdminDependencies } from './../../application/admin/interfaces/IAdminDependencies';
import { Router } from 'express';


export const adminRouter=(dependencies:IAdminDependencies)=>{
    const router= Router()


    const {loginAdmin}=adminController(dependencies)

    router.route("/login").post(loginAdmin)
    


    return router
}
