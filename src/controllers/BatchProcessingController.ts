import { Request, Response } from 'express';

export class BatchProcessingController {

    public processBatchProcessing = (req: Request, res: Response): void => {
        res.json({
            message: 'Batch processing endpoint'
        });
    }
}