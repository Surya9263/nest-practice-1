import {
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto) {
    const parseAgeToInt = parseInt(value.age.toString());

    if (isNaN(parseAgeToInt)) {
      throw new HttpException(
        'Invalid data type for age, expected number.',
        HttpStatus.BAD_REQUEST,
      );
    }

    return { ...value, age: parseAgeToInt };
  }
}
