// src/repositories/user.repository.ts
import { prisma } from '../lib/prisma';   // ← new import
import { User } from '../generated/prisma';

export class UserRepository {
  async createUser(data: { email: string; password: string; name?: string }): Promise<User> {
    return prisma.user.create({ data });
  }

  async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { email } });
  }

  async findById(id: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { id } });
  }
}