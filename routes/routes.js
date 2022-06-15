import { Router } from 'express'
import { getAllUsers, createUser, deleteUser, updateUser } from '../controllers/controller.js'
const router = Router()

router.get('/api/users', getAllUsers)
router.post('/api/users', createUser)
router.delete('/api/users/:id', deleteUser)
router.put('/api/users/:id', updateUser)

export default router