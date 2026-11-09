export type JwtPayload = Record<string, unknown>;

export interface JwtProvider {
  sign(payload: JwtPayload): string;
  verify(token: string): JwtPayload;
}
