// Aqui ficam as funções de CRUD, exportadas para as rotas individuais

import { Request, Response } from 'express';
import { User } from '../entity/User';

export const createUser = async (req: Request, res: Response) => {
  const { firstName, lastName, email, maritalStatus, plan, password } =
    req.body;
  const user = new User();
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.maritalStatus = maritalStatus;
  user.plan = plan;
  user.password = password;

  await user.save();
  return res.json(user);
};
