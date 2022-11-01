import { PrismaService } from '../../../core/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from '../dto/create-profile.dto';

@Injectable()
export class ProfileRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    userId: number,
    profile: Pick<CreateProfileDto, 'name' | `birthday` | `city` | `techStack`>,
  ) {
    return this.prisma.profile.create({
      data: {
        ...profile,
        userId,
      },
    });
  }

  async update(
    id: number,
    user: Pick<CreateProfileDto, 'name' | `birthday` | `city` | `techStack`>,
  ) {
    return this.prisma.profile.update({
      where: { id },
      data: { ...user },
    });
  }

  async findById(id: number) {
    return this.prisma.profile.findUnique({ where: { id } });
  }

  async findByUserId(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      select: { profile: true },
    });
  }
}
