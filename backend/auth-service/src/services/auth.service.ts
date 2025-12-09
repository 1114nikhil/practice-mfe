import bcrypt from "bcrypt";
import jwt, { Secret, SignOptions } from "jsonwebtoken"; // ✅ IMPORTANT
import config from "../config";
import { UserRepository } from "../repositories/user.repository";
import { publishUserCreated } from "../adapters/kafka.producer";

const userRepo = new UserRepository();

export class AuthService {
  async register(email: string, password: string, name?: string) {
    const existing = await userRepo.findByEmail(email);
    if (existing) throw new Error("Email already in use");

    const hashed = await bcrypt.hash(password, 10);
    const user = await userRepo.createUser({ email, password: hashed, name });

    // ✅ Publish event to Kafka
    await publishUserCreated({ userId: user.id, email: user.email });

    return { id: user.id, email: user.email, name: user.name };
  }

  async login(email: string, password: string) {
    const user = await userRepo.findByEmail(email);
    if (!user) throw new Error("Invalid credentials");

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error("Invalid credentials");

    // ✅ FIXED JWT TYPING
    const accessToken = jwt.sign(
      { userId: user.id, email: user.email },
      config.jwtSecret as Secret,
      { expiresIn: config.jwtExpiresIn } as SignOptions
    );

    const refreshToken = jwt.sign(
      { userId: user.id },
      config.refreshTokenSecret as Secret ,
      { expiresIn: "7d" } as SignOptions
    );

    return {
      accessToken,
      refreshToken,
      user: { id: user.id, email: user.email, name: user.name }
    };
  }
}
