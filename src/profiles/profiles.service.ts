import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
  private profiles = [
    {
      id: randomUUID(),
      name: 'test1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
    },
    {
      id: randomUUID(),
      name: 'test2',
      description:
        'ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut',
    },
    {
      id: randomUUID(),
      name: 'test3',
      description:
        'sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor',
    },
  ];

  findAll() {
    return this.profiles;
  }

  findOne(id: string) {
    return this.profiles.find((item) => item.id === id);
  }

  create(createProfileDto: CreateProfileDto) {
    const newProfile = {
      id: randomUUID(),
      ...createProfileDto,
    };

    this.profiles.push(newProfile);

    return newProfile;
  }

  update(id: string, updateProfiledto: UpdateProfileDto) {
    const matchingProfile = this.profiles.find((item) => item.id === id);
    if (!matchingProfile) return {};
    matchingProfile.name = updateProfiledto.name;
    matchingProfile.description = updateProfiledto.description;

    return matchingProfile;
  }

  delete(id: string): void {
    const matchingIndex = this.profiles.findIndex((item) => item.id === id);
    if (matchingIndex > -1) this.profiles.splice(matchingIndex, 1);
  }
}
