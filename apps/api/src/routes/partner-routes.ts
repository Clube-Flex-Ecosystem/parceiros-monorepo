import { Router } from 'express';

import { partnerController } from '../controllers/partner-controller.js';

export const adminPartnerRoutes = Router();
export const partnerRoutes = Router();

adminPartnerRoutes.get('/', partnerController.listAdminPartners);
adminPartnerRoutes.post('/', partnerController.createPartner);
adminPartnerRoutes.get('/:id', partnerController.getAdminPartner);
adminPartnerRoutes.patch('/:id', partnerController.updatePartner);
adminPartnerRoutes.patch('/:id/status', partnerController.updatePartnerStatus);

partnerRoutes.get('/', partnerController.listPublicPartners);
partnerRoutes.get('/:slug', partnerController.getPublicPartner);
