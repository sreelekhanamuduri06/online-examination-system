import express from 'express';
import { getAllTests , getSingleTest , createNewTest , editTest , deleteTest} from '../controllers/TestRoutes';

const router = express.Router();

router.get('/AllTests' , getAllTests);
router.get('/test/:testid' , getSingleTest);
router.post('/createNewTest', createNewTest);
router.post('/editTest/:testid', editTest);
router.post('/deleteTest/:testid', deleteTest);

export default router;
