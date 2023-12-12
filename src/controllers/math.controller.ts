import { Request, Response } from 'express';
import { mathService } from '../services'; // Import your math service
import {
  SuccessResponse,
  InternalErrorResponse,
} from '../helpers/response.helper';

class MathController {
  async solveQuadraticEquation(req: Request, res: Response) {
    try {
      const { A, B, C } = req.body;
      const result = await mathService.solveQuadraticEquation(A, B, C);
      return SuccessResponse(res, result);
    } catch (error: any) {
      return InternalErrorResponse(res, error.message);
    }
  }

  async generateFibonacciSequence(req: Request, res: Response) {
    try {
      const { length } = req.body;
      const result = await mathService.generateFibonacciSequence(length);
      return SuccessResponse(res, result);
    } catch (error: any) {
      return InternalErrorResponse(res, error.message);
    }
  }

  async calculateFactorial(req: Request, res: Response) {
    try {
      const { number } = req.body;
      const result = await mathService.calculateFactorial(number);
      return SuccessResponse(res, result);
    } catch (error: any) {
      return InternalErrorResponse(res, error.message);
    }
  }

  async calculateExponentialFunction(req: Request, res: Response) {
    try {
      const { exponent } = req.body;
      const result = await mathService.calculateExponentialFunction(exponent);
      return SuccessResponse(res, result);
    } catch (error: any) {
      return InternalErrorResponse(res, error.message);
    }
  }

  async calculatePermutations(req: Request, res: Response) {
    try {
      const { n, r } = req.body;
      const result = await mathService.calculatePermutations(n, r);
      return SuccessResponse(res, result);
    } catch (error: any) {
      return InternalErrorResponse(res, error.message);
    }
  }

  async calculateLogarithmicFunction(req: Request, res: Response) {
    try {
      const { base, x } = req.body;
      const result = await mathService.calculateLogarithmicFunction(base, x);
      return SuccessResponse(res, result);
    } catch (error: any) {
      return InternalErrorResponse(res, error.message);
    }
  }

  async performMatrixMultiplication(req: Request, res: Response) {
    try {
      const { matrixA, matrixB } = req.body;
      const result = await mathService.performMatrixMultiplication(matrixA, matrixB);
      return SuccessResponse(res, result);
    } catch (error: any) {
      return InternalErrorResponse(res, error.message);
    }
  }
}

export const mathController = new MathController(); // Instantiate your math service
