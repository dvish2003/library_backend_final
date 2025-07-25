import {Router} from "express";
import {addBookBorrow, getAll, overDueSendEmail, updateBookBorrow} from "../controller/bookManagement";
import {authenticate} from "../middleware/authenticate";

const bookBorrowRoute = Router();
bookBorrowRoute.post('/saveBorrowBook',authenticate,addBookBorrow);
bookBorrowRoute.get('/getAll',authenticate,getAll);
bookBorrowRoute.post('/updateBorrowBook',authenticate,updateBookBorrow);
bookBorrowRoute.post('/overDueBorrowBook',authenticate,overDueSendEmail);

export default bookBorrowRoute;