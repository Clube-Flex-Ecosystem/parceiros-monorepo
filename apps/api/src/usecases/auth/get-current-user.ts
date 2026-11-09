import { StatusCodes } from 'http-status-codes';

import { AppError } from '../../domains/errors/app-error.js';
import type { User } from '../../domains/models/user.js';
import type { UserRepository } from '../../domains/repositories/user-repository.js';

export type GetCurrentUserUseCaseInput = {
  userId: string;
};

export type GetCurrentUserUseCaseOutput = Omit<User, 'passwordHash'>;

export class GetCurrentUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(input: GetCurrentUserUseCaseInput): Promise<GetCurrentUserUseCaseOutput> {
    const user = await this.userRepository.findById(input.userId);

    if (!user) {
      throw new AppError(StatusCodes.UNAUTHORIZED, 'Sessão ausente ou inválida.');
    }

    const { passwordHash: _passwordHash, ...currentUser } = user;

    return currentUser;
  }
}
