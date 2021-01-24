# Empirical Debugging

1. understand what the whole program _should_ and _does_ do.
1. isolate the chunk of code that does not behave as expected and refactor it into a testable function/object
1. write tests the chunk _should_ pass
1. write tests the chunk _does_ pass
1. looking just at the tests: how do the two sets of tests compare? is there some overlap?
1. looking at the code: step through the test cases backwards
1. pass the tests
1. factor your code back in (directly or as a dependency)


## Pre-Bugging

writing extra tests and asserts for parts you're not sure of
