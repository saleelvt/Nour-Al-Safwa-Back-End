
import { IAdminDependencies } from "@/application/admin/interfaces/IAdminDependencies";

import { NextFunction, Request, Response } from "express";

export const loginAdminController =( dependencies: IAdminDependencies)=>{

    const {useCases:{}}=dependencies


         return async (req:Request, res:Response , next : NextFunction )=>{


            try {
                
                const {email,password}= req.body

                console.log("this is my admin ", email , password );
                
            } catch (error) {
                
            }
         }


    }