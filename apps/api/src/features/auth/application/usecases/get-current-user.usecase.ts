import { StatusCodes } from 'http-status-codes';

import { BaseError } from '../../../../shared/domain/errors/base.error.js';
import type { User } from '../../domain/models/user.model.js';
import type { UserRepository } from '../../domain/repositories/user.repository.js';

export type GetCurrentUserUseCaseInput = {
  userId: string;
};

export type GetCurrentUserUseCaseOutput = Omit<User, 'passwordHash'>;

export class GetCurrentUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(input: GetCurrentUserUseCaseInput): Promise<GetCurrentUserUseCaseOutput> {
    const user = await this.userRepository.findById(input.userId);

    if (!user) {
      throw new BaseError(StatusCodes.UNAUTHORIZED, 'Sessão ausente ou inválida.');
    }

    const { passwordHash: _passwordHash, ...currentUser } = user;

    return currentUser;
  }
}
