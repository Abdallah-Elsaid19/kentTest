import type { ApiErrorBody } from "@/types/api";

export class ApiError extends Error {
  readonly status: number;
  readonly code: string;
  readonly details: ApiErrorBody["error"]["details"];
  readonly requestId?: string;

  constructor(
    message: string,
    status: number,
    code = "request_error",
    details: ApiErrorBody["error"]["details"] = {},
    requestId?: string,
  ) {
    super(message);
    this.status = status;
    this.code = code;
    this.details = details;
    this.requestId = requestId;
  }
}
