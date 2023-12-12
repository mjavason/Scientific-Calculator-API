import { IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class QuadraticFormulaDto {
  @IsNumber()
  A!: number;

  @IsNumber()
  B!: number;

  @IsNumber()
  C!: number;
}

export class FibonacciSequenceDto {
  @IsNumber()
  @Min(0)
  length!: number;
}

export class FactorialCalculationDto {
  @IsNumber()
  @Min(0)
  number!: number;
}

export class ExponentialFunctionDto {
  @IsNumber()
  exponent!: number;
}

export class PermutationsCalculationDto {
  @IsNumber()
  @Min(0)
  n!: number;

  @IsNumber()
  @Min(0)
  r!: number;
}

export class LogarithmicFunctionDto {
  @IsNumber()
  @Min(1)
  base!: number;

  @IsNumber()
  @Min(1)
  x!: number;
}

export class MatrixMultiplicationDto {
  @IsNumber({}, { each: true })
  matrixA!: number[][];

  @IsNumber({}, { each: true })
  matrixB!: number[][];
}
