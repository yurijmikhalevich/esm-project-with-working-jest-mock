Steps to build/reproduce:

```shell
$ git clone git@github.com:yurijmikhalevich/esm-project-with-working-jest-mock.git
$ cd ..
$ git clne git@github.com:SimenB/jest.git && cd jest && git checkout eac6673428aaceee7a41b4ccf363f8b8c6916c86 && yarn && yarn build && cd ..
$ cd esm-project-with-working-jest-mock && npm run test
```
