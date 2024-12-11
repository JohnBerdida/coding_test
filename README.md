# Coding Challenge: Batch Processing with User Balance deduction.

## Overview
You are tasked with creating an endpoint in Node.js using TypeScript that processes requests in batches. The system will simulate deducting costs from user balances based on incoming requests. You will be provided with two files:
- `users.json` (contains users balances)
- `batch_user_cost.json` (contains request for batch processing with User ids and costs)

Your objective is to create an API that can handle these batch request, check balances and update them accordingly.

These are the lists of users that has been updated after you've implemented the solution.

### Example Endpoint:
``
GET /batch-processing
``

### Expected Result:
```json
{
  1: 504.0500000000001,
  2: 484.13999999999993,
  3: 552.1600000000002,
  4: 469.0199999999999,
  5: 538.53,
  6: 491.49999999999994,
  7: 555.8700000000001,
  8: 482.65999999999985,
  9: 490.75,
  10: 605.0000000000001,
  11: 523.3800000000003,
  12: 596.3899999999994,
  13: 516.7099999999998,
  14: 521.2900000000001,
  15: 493.58000000000055,
  16: 595.9299999999998,
  17: 494.35000000000025,
  18: 509.23999999999995,
  19: 535.1899999999993,
  20: 509.74
}
```

## Requirements
- Node.js with TypeScript.
- Adherence to SOLID principles for clean and maintainable code.
- Implement a batch processing API that updates user balances based on requests in two provided JSON files.