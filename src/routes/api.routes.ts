import { Router } from "express";
import { container } from "../utils/container";
import { BatchProcessingController } from "../controllers/BatchProcessingController";

const router: Router = Router();

const batchProcessingController = container.resolve(BatchProcessingController);

router.get('/batch-processing', batchProcessingController.processBatchProcessing);

export default router;
