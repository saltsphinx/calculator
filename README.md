# calculator

How does a calculator work at first glance?
It requires at the very least two numbers and one operator,
In cases where there will be a sum, there must be one less
operator than the numbers, always, for example:
[9, 45, 12], [+, *] or [6, 18, 32, 86, 94], [+, +, /, +]

Add the numbers and operators to already declared array variables,
On clicking the equal sign, check to see if theres a number in the input AND
that theres at least one number and one operator. If fail, return,
if success, push the input number into the number array and call
calculation function.

There may be cases where the user has entered an operator before clicking
the equal sign, in an else statement, check if there are at least two numbers, and
at least one operator MINUS ONE the length of the operator array. If false,
return. If true, pop the last added operator and call calculation function.
