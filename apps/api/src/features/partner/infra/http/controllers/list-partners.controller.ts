import type { RequestHandler } from 'express';

import { formatResponse } from '../../../../../shared/helpers/format-response.helper.js';

export const listPartnersController: RequestHandler = (_request, response) => {
  const formattedResponse = formatResponse([], { total: 0 });

  return response.status(200).json(formattedResponse);
};
