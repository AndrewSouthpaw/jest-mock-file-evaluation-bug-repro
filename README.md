# Repro

```bash
$ npm i
$ npm t
```

Running the test, you'll see the log statement in `__mocks__/dependency.ts` printed out twice, indicating that the manual mock file is evaluated twice.

```
$ npm t

> jest-mock-file-bug-repro@1.0.0 test
> jest

  console.log
    evaluating mock dependency file

      at Object.<anonymous> (src/__mocks__/dependency.ts:1:9)

  console.log
    evaluating mock dependency file

      at Object.<anonymous> (src/__mocks__/dependency.ts:1:9)

 PASS  src/__tests__/a.test.ts
  ✓ does something (1 ms)
```

There are comments in `__tests__/a.test.ts`.
