import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';

export const spinnerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
