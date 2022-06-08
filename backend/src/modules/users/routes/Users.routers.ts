import { Router } from 'express';
import { createUser } from '../controller/Users.controller';

const router = Router();

router.get('', (req, res) => {
  res.send('Você acessou a rota /users');
});

router.post('', createUser);

export default router;
