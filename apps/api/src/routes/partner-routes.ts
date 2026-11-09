import { Router } from 'express';

import { partnerController } from '../controllers/partner-controller.js';

export const partnerRoutes = Router();

partnerRoutes.post('/', partnerController.createPartner);
partnerRoutes.patch('/:id', partnerController.updatePartner);
partnerRoutes.patch('/:id/status', partnerController.updatePartnerStatus);
partnerRoutes.get('/', partnerController.listPartners);
partnerRoutes.get('/:slug', partnerController.getPartner);
