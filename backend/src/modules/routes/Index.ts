import UserRoute from '../users/routes/Users.routers';
import { Router } from 'express';

const router = Router();
router.use('/users', UserRoute);

export default router;
