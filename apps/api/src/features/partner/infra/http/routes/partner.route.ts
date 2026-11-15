import { Router } from 'express';

import { createPartnerController } from '../controllers/create-partner.controller.js';
import { getPartnerController } from '../controllers/get-partner.controller.js';
import { listPartnersController } from '../controllers/list-partners.controller.js';
import { updatePartnerController } from '../controllers/update-partner.controller.js';
import { updatePartnerStatusController } from '../controllers/update-partner-status.controller.js';

export const partnerRoutes = Router();

partnerRoutes.post('/', createPartnerController);
partnerRoutes.patch('/:id', updatePartnerController);
partnerRoutes.patch('/:id/status', updatePartnerStatusController);
partnerRoutes.get('/', listPartnersController);
partnerRoutes.get('/:slug', getPartnerController);
