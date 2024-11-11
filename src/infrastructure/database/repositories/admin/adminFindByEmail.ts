import { AdminEntity } from "@/domain/entities";
import { Admin } from "../../models/adminSchema";

export const adminFindByEmail = async (
  email: string
): Promise<AdminEntity |null> => {
  try {
    console.log("🚀 ~ AdminEmail to find:", email);

    const existingAdmin = await Admin.findOne({ email: email });
    return existingAdmin;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
