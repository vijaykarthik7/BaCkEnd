import express from 'express';
import {fetch, getData, update,deleteUser,datas} from '../controller/userController.js';
const router=express.Router();

router.post('/fetch',fetch);
 router.get('/getdata',getData); 
router.put('/update/:id', update);
router.delete('/deleteUser/:id',deleteUser);
router.get('/datas/:id',datas)
export default router;