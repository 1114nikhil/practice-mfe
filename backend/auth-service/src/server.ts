import app from './app';
import config from './config';
import { prisma } from './lib/prisma';

async function bootstrap() {
  try {
    await prisma.$connect();
    console.log('Connected to PostgreSQL via Prisma');

    const server = app.listen(config.port, () => {
      console.log(`Auth service listening on port ${config.port}`);
    });

    const shutdown = async (signal: string) => {
      console.log(`\n${signal} received – shutting down gracefully...`);
      server.close(async () => {
        await prisma.$disconnect();
        process.exit(0);
      });
    };

    process.on('SIGINT', () => shutdown('SIGINT'));
    process.on('SIGTERM', () => shutdown('SIGTERM'));
  } catch (err) {
    console.error('Failed to start server:', err);
    await prisma.$disconnect().catch(() => {});
    process.exit(1);
  }
}

bootstrap();
