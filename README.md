# Unexpected Type Coercion in JavaScript Arithmetic

This repository demonstrates a common JavaScript bug caused by loose typing and implicit type coercion.  The `foo` function intends to perform numerical addition. However, due to the presence of a string argument ("1"), JavaScript coerces the number 1 into a string before concatenation, resulting in "11" instead of 2.

This is a classic example of why explicit type checking is often necessary in JavaScript to avoid such subtle but impactful errors.  The solution showcases how to mitigate this using the `typeof` operator and appropriate type conversions.