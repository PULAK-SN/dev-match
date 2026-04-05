import { Controller, Get } from '@nestjs/common';

@Controller('profiles')
export class ProfilesController {
  // GET /profiles

  @Get()
  findAll() {
    return [];
  }
  // GET /profiles/:id
  // POST /profiles
  // PUT /profiles/:id
  // DELETE /profiles/:id
}
