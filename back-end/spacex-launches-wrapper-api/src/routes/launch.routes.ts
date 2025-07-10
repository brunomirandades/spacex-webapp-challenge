import { Router } from 'express';
import * as controller from '../controllers/launch.controller';

const router = Router();

router.get('/next', controller.getNext);
router.get('/previous', controller.getPrevious);
router.get('/upcoming', controller.getUpcoming);
router.get('/past', controller.getPast);
router.get('/summary', controller.getSummary)

export default router;