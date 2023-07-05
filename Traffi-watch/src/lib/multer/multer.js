import multer, { diskStorage } from 'multer';
import { extname } from 'path';

export default multer({
    storage: diskStorage({}),
    fileFilter: (req, file, cb) => {
        let ext = extname(file.originalname);
        if (ext !== '.pdf' && ext !== '.doc' && ext !== '.docx' &&  ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
            cb(new Error('File type is not supported'), false);
            return;
        }
        cb(null, true);
    }   
});