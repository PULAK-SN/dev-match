import { IsString, MinLength } from 'class-validator';

export class UpdateProfileDto {
  @IsString()
  @MinLength(3, { message: 'name must contain more then or equal 3 character' })
  name: string;

  @IsString()
  description: string;
}
