export interface IError {
  status?: number;
  message: string;
  details?: [err: { type: string, message: string } ];
}