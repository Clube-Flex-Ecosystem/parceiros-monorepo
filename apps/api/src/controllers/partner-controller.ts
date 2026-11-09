import type { RequestHandler } from 'express';

import {
  listAdminPartnersSchema,
  listPublicPartnersSchema,
  partnerIdParamsSchema,
  partnerInputSchema,
  partnerSlugParamsSchema,
  updatePartnerSchema,
  updatePartnerStatusSchema,
} from '../schemas/partner-schema.js';
import { validateSchema } from '../validations/zod/validate-schema.js';

const listAdminPartners: RequestHandler = (request, response) => {
  const parsed = validateSchema(request.query, listAdminPartnersSchema);

  void parsed;

  return response.status(200).json({ ok: true });
};

const createPartner: RequestHandler = (request, response) => {
  const parsed = validateSchema(request.body, partnerInputSchema);

  void parsed;

  return response.status(201).json({ ok: true });
};

const getAdminPartner: RequestHandler = (request, response) => {
  const parsed = validateSchema(request.params, partnerIdParamsSchema);

  void parsed;

  return response.status(200).json({ ok: true });
};

const updatePartner: RequestHandler = (request, response) => {
  const parsed = validateSchema(
    { params: request.params, body: request.body },
    updatePartnerSchema,
  );

  void parsed;

  return response.status(200).json({ ok: true });
};

const updatePartnerStatus: RequestHandler = (request, response) => {
  const parsed = validateSchema(
    { params: request.params, body: request.body },
    updatePartnerStatusSchema,
  );

  void parsed;

  return response.status(200).json({ ok: true });
};

const listPublicPartners: RequestHandler = (request, response) => {
  const parsed = validateSchema(request.query, listPublicPartnersSchema);

  void parsed;

  return response.status(200).json({ ok: true });
};

const getPublicPartner: RequestHandler = (request, response) => {
  const parsed = validateSchema(request.params, partnerSlugParamsSchema);

  void parsed;

  return response.status(200).json({ ok: true });
};

export const partnerController = {
  listAdminPartners,
  createPartner,
  getAdminPartner,
  updatePartner,
  updatePartnerStatus,
  listPublicPartners,
  getPublicPartner,
};
