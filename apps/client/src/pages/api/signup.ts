import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from 'mongoose';
import { Admin } from "db";
import jwt from "jsonwebtoken";
import { ensureConnected } from "db";

const SECRET = " SECRET";

type requestData = {
  email: string;
  password: string;
};

type responseData = {
    message: string;
    token?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<responseData>,
) {
  await ensureConnected();
  const { email, password }: requestData = req.body;
  const admin = await Admin.findOne({ email });
  if (admin) {
    res.status(403).json({ message: 'Admin already exists' });
  } else {
    const newAdmin = new Admin({ email, password });
    await newAdmin.save();
    const token = jwt.sign({ email, role: 'admin' }, SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Admin created successfully', token });
  }
}