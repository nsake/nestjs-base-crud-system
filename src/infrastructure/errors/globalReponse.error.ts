import { HttpException } from '@nestjs/common';
import { Request } from 'express';
import { dbErrors } from './dbErrors.handlers';

export const GlobalResponseError: (
  statusCode: number,
  message: string,
  code: string,
  request: Request,
  errors: any,
) => IResponseError | HttpException = (
  statusCode: number,
  message: string,
  code: string,
  request: Request,
  errors: any,
) => {
  const dbErrorsRes = dbErrors({ statusCode, message, code, request });
  if (dbErrorsRes) return dbErrorsRes;

  return {
    statusCode,
    message,
    code,
    timestamp: new Date().toISOString(),
    path: request.url,
    method: request.method,
    errors,
  };
};

export interface IResponseError {
  statusCode: number;
  message: string;
  code: string;
  timestamp: string;
  path: string;
  method: string;
  errors: any;
}
