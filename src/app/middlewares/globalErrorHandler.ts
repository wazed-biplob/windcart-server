import { ZodError } from "zod";
import { zodErrorHandler } from "../errors/zodErrors";
import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import config from "../config/config";
import { TErrorSource } from "../interfaces/errors";

export const errorHandler: ErrorRequestHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = err?.message;
  let errorSources: TErrorSource = [
    {
      path: "",
      message: "Something went wrong",
    },
  ];
  if (err instanceof ZodError) {
    const simpliedError = zodErrorHandler(err);
    statusCode = simpliedError?.statusCode;
    message = simpliedError?.message;
    errorSources = simpliedError?.errorSources;
  }
  res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    err,
    stack: config.node_env === "development" ? err?.stack : null,
  });
};
