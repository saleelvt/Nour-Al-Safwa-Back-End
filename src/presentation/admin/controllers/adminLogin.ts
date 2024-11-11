import { IAdminDependencies } from "@/application/admin/interfaces/IAdminDependencies";
import { NextFunction, Request, Response } from "express";

export const loginAdminController = (dependencies: IAdminDependencies) => {
    const { useCases: { loginAdminUseCase } } = dependencies;
    
    return async (req: Request, res: Response, next: NextFunction): Promise<void |null | any> => {
        try {
            const { email, password } = req.body;
            console.log("Admin login attempt:", email, password);

            // Check if both email and password are provided
            if (!email || !password) {
                return res.status(400).json({ success: false, message: "Email and password are required" });
            }

            // Call the login use case and await the result
            const data = await loginAdminUseCase(dependencies).execute(email, password);

            if (!data) {
                return res.status(401).json({ success: false, message: "Invalid credentials" });
            }

            return res.status(200).json({ success: true, message: "Admin successfully logged in" });
        } catch (error) {
            console.error("Failed to log in admin:", error);
            // Pass error to the next error handler
            next(error); 
        }
    };
};
