import { Router } from "express";
import { mathController } from "../../../controllers";
import { validateBodyDTO } from "../../../middleware/body.validation.middleware";
import { QuadraticFormulaDto, FibonacciSequenceDto, FactorialCalculationDto, ExponentialFunctionDto, PermutationsCalculationDto, LogarithmicFunctionDto, MatrixMultiplicationDto } from "../../../validation/math.validation";

const router = Router();

router.post(
  '/quadratic-formula',
  validateBodyDTO(QuadraticFormulaDto),
  mathController.solveQuadraticEquation
);

router.post(
  '/fibonacci-sequence',
  validateBodyDTO(FibonacciSequenceDto),
  mathController.generateFibonacciSequence
);

router.post(
  '/factorial-calculation',
  validateBodyDTO(FactorialCalculationDto),
  mathController.calculateFactorial
);

router.post(
  '/exponential-function',
  validateBodyDTO(ExponentialFunctionDto),
  mathController.calculateExponentialFunction
);

router.post(
  '/permutations-calculation',
  validateBodyDTO(PermutationsCalculationDto),
  mathController.calculatePermutations
);

router.post(
  '/logarithmic-function',
  validateBodyDTO(LogarithmicFunctionDto),
  mathController.calculateLogarithmicFunction
);

router.post(
  '/matrix-multiplication',
  validateBodyDTO(MatrixMultiplicationDto),
  mathController.performMatrixMultiplication
);

export default router;
