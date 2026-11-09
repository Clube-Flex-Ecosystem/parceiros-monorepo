import type { RequestHandler } from 'express';

import { listPublicPartnersSchema } from '../schemas/partner/list-public-partners-schema.js';
import { partnerInputSchema } from '../schemas/partner/partner-input-schema.js';
import { partnerSlugParamsSchema } from '../schemas/partner/partner-slug-params-schema.js';
import { updatePartnerSchema } from '../schemas/partner/update-partner-schema.js';
import { validateSchema } from '../helpers/validate-schema.js';

const createPartner: RequestHandler = (request, response) => {
  const parsed = validateSchema(request.body, partnerInputSchema);

  void parsed;

  return response.status(201).json({ ok: true });
};

const updatePartner: RequestHandler = (request, response) => {
  const parsed = validateSchema(
    { params: request.params, body: request.body },
    updatePartnerSchema,
  );

  void parsed;

  return response.status(200).json({ ok: true });
};

const listPartners: RequestHandler = (request, response) => {
  const parsed = validateSchema(request.query, listPublicPartnersSchema);

  void parsed;

  return response.status(200).json({ ok: true });
};

const getPartner: RequestHandler = (request, response) => {
  const parsed = validateSchema(request.params, partnerSlugParamsSchema);

  void parsed;

  return response.status(200).json({ ok: true });
};

export const partnerController = {
  createPartner,
  updatePartner,

  listPartners,
  getPartner,
};
