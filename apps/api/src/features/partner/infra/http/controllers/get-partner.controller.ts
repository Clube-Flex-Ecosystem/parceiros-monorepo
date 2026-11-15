import type { RequestHandler } from 'express';

import { formatResponse } from '../../../../../shared/helpers/format-response.helper.js';

export const getPartnerController: RequestHandler = (_request, response) => {
  const formattedResponse = formatResponse({ ok: true });

  return response.status(200).json(formattedResponse);
};
