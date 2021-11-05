# Bothrs: ESLint configuration

A very opinionated ESLint configuration used at Bothrs.

## Prerequisites

- Prettier
- Typescript

## Installation

`yarn add @bothrs/eslint-config -D`

```
---
extends:
  - @bothrs/eslint-config

  # Alternatively, add extra rules for commonly used frameworks
  - @bothrs/eslint-config/jest
  - @bothrs/eslint-config/react
  - @bothrs/eslint-config/react-native
```
