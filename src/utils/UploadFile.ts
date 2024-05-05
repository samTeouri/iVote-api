import * as path from 'path';
import { Request, Response } from 'express';
import multer from 'multer';

const uploadFilePath = path.resolve(__dirname, '../..', 'public/uploads/files');

const storageFile: multer.StorageEngine = multer.diskStorage({
    destination: uploadFilePath,
    filename(req: Express.Request, file: Express.Multer.File, fn: (error: Error | null, filename: string) => void): void {
        fn(null, `${new Date().getTime().toString()}-${file.fieldname}${path.extname(file.originalname)}`);
    },
});

const uploadFile = multer({
    storage: storageFile,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter(req, file, callback) {
        const extension: boolean = ['.png', '.jpg', '.jpeg', '.pdf'].indexOf(path.extname(file.originalname).toLowerCase()) >= 0;
        const mimeType: boolean = ['image/png', 'image/jpeg', 'application/pdf'].indexOf(file.mimetype) >= 0;

        if (extension && mimeType) {
            return callback(null, true);
        }
    
        callback(new Error('Invalid file type. Only picture file on type PDF, PNG, JPEG and JPG are allowed!'));
    },
}).single('file');

export const handleSingleUploadFile = async (req: Request, res: Response): Promise<any> => {
    return new Promise((resolve, reject): void => {
        uploadFile(req, res, (error) => {
            if (error) {
                reject(error);
            }

            resolve({ file: req.file, body: req.body });
        });
    });
};