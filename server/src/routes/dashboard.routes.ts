import { Router } from 'express';
import { DashboardController } from '../controllers/dashboard.controller';

const router = Router();
const dashboardController = new DashboardController();

router.get('/dashboard', dashboardController.getDashboardData);

export default router;
