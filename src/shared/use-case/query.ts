import { UseCase } from './use-case.ts'

export abstract class Query<Response, Request = void> extends UseCase<
  Request,
  Response
> {}
