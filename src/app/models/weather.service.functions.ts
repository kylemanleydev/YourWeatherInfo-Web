import { HttpHeaders } from '@angular/common/http';

export interface IAzureFunctionRequest {
  readonly url: string;
  readonly method: string;
  readonly headers?: HttpHeaders;
  readonly body?: any;
  readonly responseAsText?: boolean;
}

export interface AzureFunctionPostRequest extends IAzureFunctionRequest {
  readonly method: 'POST';
}
