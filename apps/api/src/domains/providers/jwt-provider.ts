export type JwtPayload = Record<string, unknown>;

export type JwtSignOptions = {
  expiresIn: number;
};

export interface JwtProvider {
  sign(payload: JwtPayload, options: JwtSignOptions): string;
  verify(token: string): JwtPayload;
}
