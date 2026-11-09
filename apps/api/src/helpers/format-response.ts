export type ResponseMeta = {
  total: number;
};

export type FormattedResponse<T> = {
  data: T;
  meta?: ResponseMeta;
};

export function formatResponse<T>(data: T, meta?: ResponseMeta): FormattedResponse<T> {
  return meta ? { data, meta } : { data };
}
