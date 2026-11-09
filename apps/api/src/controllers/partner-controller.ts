import type { RequestHandler } from 'express';

import { validateSchema } from '../helpers/validate-schema.js';
import { createPartnerRequest } from '../schemas/partner/create-partner.js';
import { updatePartnerRequest } from '../schemas/partner/update-partner.js';
import { updatePartnerStatusRequest } from '../schemas/partner/update-partner-status.js';

const createPartner: RequestHandler = (request, response) => {
  const parsed = validateSchema(request.body, createPartnerRequest);

  void parsed;

  return response.status(201).json({ ok: true });
};

const updatePartner: RequestHandler = (request, response) => {
  const parsed = validateSchema(request.body, updatePartnerRequest);

  void parsed;

  return response.status(200).json({ ok: true });
};

const updatePartnerStatus: RequestHandler = (request, response) => {
  const parsed = validateSchema(request.body, updatePartnerStatusRequest);

  void parsed;

  return response.status(200).json({ ok: true });
};

const listPartners: RequestHandler = (_request, response) =>
  response.status(200).json({ ok: true });

const getPartner: RequestHandler = (_request, response) => response.status(200).json({ ok: true });

export const partnerController = {
  createPartner,
  updatePartner,
  updatePartnerStatus,

  listPartners,
  getPartner,
};
