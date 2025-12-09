// src/repositories/user.repository.ts
import { prisma } from '../lib/prisma';   // ← new import
import type { UserModel } from '../generated/prisma/models/User';
export class UserRepository {
  async createUser(data: { email: string; password: string; name?: string }): Promise<UserModel> {
    return prisma.user.create({ data });
  }

  async findByEmail(email: string): Promise<UserModel | null> {
    return prisma.user.findUnique({ where: { email } });
  }

  async findById(id: string): Promise<UserModel | null> {
    return prisma.user.findUnique({ where: { id } });
  }
}