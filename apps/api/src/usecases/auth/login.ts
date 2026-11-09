import { StatusCodes } from 'http-status-codes';

import { AppError } from '../../domains/errors/app-error.js';
import type { HashProvider } from '../../domains/providers/hash-provider.js';
import type { JwtProvider } from '../../domains/providers/jwt-provider.js';
import type { UserRepository } from '../../domains/repositories/user-repository.js';

export type LoginUseCaseInput = {
  email: string;
  password: string;
};

export type LoginUseCaseOutput = {
  sessionToken: string;
  expiresAt: Date;
};

export class LoginUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashProvider: HashProvider,
    private readonly jwtProvider: JwtProvider,
  ) {}

  async execute(input: LoginUseCaseInput): Promise<LoginUseCaseOutput> {
    const user = await this.userRepository.findByEmail(input.email);

    const isPasswordValid = user
      ? await this.hashProvider.compare(input.password, user.passwordHash)
      : false;

    if (!user || !isPasswordValid) {
      throw new AppError(StatusCodes.UNAUTHORIZED, 'Credenciais inválidas.');
    }

    const expiresIn = 8 * 60 * 60;
    const expiresAt = new Date(Date.now() + expiresIn * 1000);
    const sessionToken = this.jwtProvider.sign({ sub: user.id }, { expiresIn });

    return { sessionToken, expiresAt };
  }
}
