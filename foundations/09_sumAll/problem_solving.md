## Understand
take any two positives value and sum the value between them
the values might not specifically be from smallest to biggest it could be for 
example revered biggest first but it's always two values

## Plan
Function inputValidation (input)
    Confirm that input is a positive integer
    return result
Function sumALL
    Check input is valid by calling inputValidation ()
    if false return "ERROR"
    Check values are in correct order i.e smallest to biggest
    if not swap values
    Sum values using the formula n/2 * (a + l)
        create variable n = (l-a) + 1
        use the formula s = n/2 * (a + l) to get sum
        return sum