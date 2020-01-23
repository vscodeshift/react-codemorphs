# React Codemorphs

[![CircleCI](https://circleci.com/gh/vscodeshift/react-codemorphs.svg?style=svg)](https://circleci.com/gh/vscodeshift/react-codemorphs)
[![Coverage Status](https://codecov.io/gh/vscodeshift/react-codemorphs/branch/master/graph/badge.svg)](https://codecov.io/gh/vscodeshift/react-codemorphs)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/vscodeshift.react-codemorphs)

codemod commands for everyday work with React

# Wrap with JSX Element

Adds a parent JSX Element around the selected JSX node(s) or the node that contains the cursor.

## Example

### Before

```tsx
const Foo = () => (
  <div>
    // selection start
    {foo}
    {bar}
    <span />
    // selection end
    {baz}
  </div>
)
```

### After

```tsx
const Foo = () => (
  <div>
    <Test>
      {foo}
      {bar}
      <span />
    </Test>
    {baz}
  </div>
)
```

# Wrap with Child Function Element

Wraps the JSX Element that contains the cursor in a parent JSX Element with a child function
(making the child function return the wrapped element).

## Example

### Before

```tsx
const Foo = () => (
  <div>
    <Bar />
  </div>
)
```

Position cursor in `<Bar />` then run the command.

### After

```tsx
const Foo = () => (
  <div>
    <Test>{(): React.ReactNode => <Bar />}</Test>
  </div>
)
```
