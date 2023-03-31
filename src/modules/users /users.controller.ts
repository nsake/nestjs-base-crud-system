import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { UsersService } from './users.service';
import { SchemaValidationPipe } from 'src/infrastructure/pipes/schema-validation.pipe';
import { GlobalExceptionFilter } from 'src/infrastructure/decorators/catch.decorator';
import { UserDto } from './dtos/user.dto';

@Controller()
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  @UseFilters(new GlobalExceptionFilter())
  create(
    @Body(new SchemaValidationPipe(UserDto))
    createUserDto: UserDto,
  ): Promise<any> {
    return this.userService.create(createUserDto);
  }

  @Post()
  @UseFilters(new GlobalExceptionFilter())
  get(
    @Body(new SchemaValidationPipe(UserDto))
    getUserDto: UserDto,
  ): Promise<any> {
    return this.userService.getByName(getUserDto);
  }
}
