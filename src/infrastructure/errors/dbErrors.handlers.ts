import { HttpException, HttpStatus } from '@nestjs/common';
import { DbErrors } from '../enums/dbErrors.enum';

export function dbErrors(err: any) {
  switch (err.code) {
    case DbErrors.Duplicate: {
      return new HttpException(
        {
          message: 'Duplicate records',
        },
        HttpStatus.CONFLICT,
      );
    }
    case DbErrors.RelationNotExists: {
      return new HttpException(
        {
          message: "Relation wasn't found",
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    default: {
      return null;
    }
  }
}
