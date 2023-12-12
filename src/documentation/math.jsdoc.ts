/**
 * @swagger
 * tags:
 *   - name: Math Formulas
 *     description: Endpoints for various math formulas
 */

/**
 * @swagger
 * paths:
 *   /math/quadratic-formula:
 *     post:
 *       summary: Solve the quadratic equation
 *       description: |
 *         This endpoint allows you to solve a quadratic equation of the form Ax^2 + Bx + C = 0.
 *       tags:
 *         - Math Formulas
 *       requestBody:
 *         description: Coefficients for the quadratic equation
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 A:
 *                   type: number
 *                   description: Coefficient of x^2
 *                 B:
 *                   type: number
 *                   description: Coefficient of x
 *                 C:
 *                   type: number
 *                   description: Constant term
 *               required:
 *                 - A
 *                 - B
 *                 - C
 *       responses:
 *         '200':
 *           description: Successfully solved the quadratic equation
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   solutions:
 *                     type: array
 *                     items:
 *                       type: number
 *                     description: Array of solutions
 *         '400':
 *           description: Bad request, please provide valid coefficients
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     description: Error message
 */

/**
 * @swagger
 * paths:
 *   /math/pythagorean-theorem:
 *     post:
 *       summary: Calculate the length of the hypotenuse
 *       description: |
 *         This endpoint allows you to calculate the length of the hypotenuse in a right-angled triangle using the Pythagorean theorem.
 *       tags:
 *         - Math Formulas
 *       requestBody:
 *         description: Side lengths of the right-angled triangle
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 a:
 *                   type: number
 *                   description: Length of side 'a'
 *                 b:
 *                   type: number
 *                   description: Length of side 'b'
 *               required:
 *                 - a
 *                 - b
 *       responses:
 *         '200':
 *           description: Successfully calculated the length of the hypotenuse
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   hypotenuse:
 *                     type: number
 *                     description: Length of the hypotenuse
 *         '400':
 *           description: Bad request, please provide valid side lengths
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     description: Error message
 */


/**
 * @swagger
 * paths:
 *   /math/matrix-multiplication:
 *     post:
 *       summary: Perform matrix multiplication
 *       description: |
 *         This endpoint allows you to perform matrix multiplication for two matrices A and B.
 *       tags:
 *         - Math Formulas
 *       requestBody:
 *         description: Matrices for multiplication
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 matrixA:
 *                   type: array
 *                   items:
 *                     type: array
 *                     items:
 *                       type: number
 *                   description: First matrix (A)
 *                 matrixB:
 *                   type: array
 *                   items:
 *                     type: array
 *                     items:
 *                       type: number
 *                   description: Second matrix (B)
 *               required:
 *                 - matrixA
 *                 - matrixB
 *       responses:
 *         '200':
 *           description: Successfully performed matrix multiplication
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   result:
 *                     type: array
 *                     items:
 *                       type: array
 *                       items:
 *                         type: number
 *                     description: Resultant matrix
 *         '400':
 *           description: Bad request, please provide valid matrices for multiplication
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     description: Error message
 */


/**
 * @swagger
 * paths:
 *   /math/fibonacci-sequence:
 *     post:
 *       summary: Generate Fibonacci sequence
 *       description: |
 *         This endpoint allows you to generate the Fibonacci sequence up to a specified length.
 *       tags:
 *         - Math Formulas
 *       requestBody:
 *         description: Number of elements in the Fibonacci sequence
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 length:
 *                   type: integer
 *                   description: Number of elements in the sequence
 *               required:
 *                 - length
 *       responses:
 *         '200':
 *           description: Successfully generated the Fibonacci sequence
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   sequence:
 *                     type: array
 *                     items:
 *                       type: integer
 *                     description: Generated Fibonacci sequence
 *         '400':
 *           description: Bad request, please provide a valid sequence length
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     description: Error message
 */

/**
 * @swagger
 * paths:
 *   /math/factorial-calculation:
 *     post:
 *       summary: Calculate factorial
 *       description: |
 *         This endpoint allows you to calculate the factorial of a given number.
 *       tags:
 *         - Math Formulas
 *       requestBody:
 *         description: Number for factorial calculation
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 number:
 *                   type: integer
 *                   description: Number for factorial calculation
 *               required:
 *                 - number
 *       responses:
 *         '200':
 *           description: Successfully calculated the factorial
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   result:
 *                     type: integer
 *                     description: Factorial result
 *         '400':
 *           description: Bad request, please provide a valid number
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     description: Error message
 */

/**
 * @swagger
 * paths:
 *   /math/exponential-function:
 *     post:
 *       summary: Calculate exponential function
 *       description: |
 *         This endpoint allows you to calculate the exponential function e^x for a given x.
 *       tags:
 *         - Math Formulas
 *       requestBody:
 *         description: Exponent for exponential function
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 exponent:
 *                   type: number
 *                   description: Exponent for the exponential function
 *               required:
 *                 - exponent
 *       responses:
 *         '200':
 *           description: Successfully calculated the exponential function
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   result:
 *                     type: number
 *                     description: Exponential function result
 *         '400':
 *           description: Bad request, please provide a valid exponent
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     description: Error message
 */

/**
 * @swagger
 * paths:
 *   /math/permutations-calculation:
 *     post:
 *       summary: Calculate permutations
 *       description: |
 *         This endpoint allows you to calculate permutations (nPr) for given values of n and r.
 *       tags:
 *         - Math Formulas
 *       requestBody:
 *         description: Values for permutations calculation
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 n:
 *                   type: integer
 *                   minimum: 0
 *                   description: Total number of items
 *                 r:
 *                   type: integer
 *                   minimum: 0
 *                   description: Number of items to choose
 *               required:
 *                 - n
 *                 - r
 *       responses:
 *         '200':
 *           description: Successfully calculated permutations
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   result:
 *                     type: integer
 *                     description: Permutations result
 *         '400':
 *           description: Bad request, please provide valid values for n and r
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     description: Error message
 */


/**
 * @swagger
 * paths:
 *   /math/logarithmic-function:
 *     post:
 *       summary: Calculate logarithmic function
 *       description: |
 *         This endpoint allows you to calculate the logarithmic function log_b(x) for given values of b and x.
 *       tags:
 *         - Math Formulas
 *       requestBody:
 *         description: Values for logarithmic function calculation
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 base:
 *                   type: number
 *                   minimum: 1
 *                   description: Logarithmic base (b)
 *                 x:
 *                   type: number
 *                   minimum: 1
 *                   description: Logarithmic value (x)
 *               required:
 *                 - base
 *                 - x
 *       responses:
 *         '200':
 *           description: Successfully calculated logarithmic function
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   result:
 *                     type: number
 *                     description: Logarithmic function result
 *         '400':
 *           description: Bad request, please provide valid values for base and x
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     description: Error message
 */

