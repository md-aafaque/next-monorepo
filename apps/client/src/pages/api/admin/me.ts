import type { NextApiRequest, NextApiResponse } from "next";
import { Admin } from "db";
import { AdminType } from "types";

type responseData = {
  email?: string;
  msg?: string;
};

export default async function handler(
  req: NextApiRequest & {admin: AdminType},
  res: NextApiResponse<responseData>,
) {
    const admin = await Admin.findOne({ email: req.admin.email });
    if (!admin) {
      res.status(403).json({msg: "Admin doesnt exist"})
      return
    }
    res.json({
        email: admin.email
    })
}


