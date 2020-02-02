# React Codemorphs

[![CircleCI](https://circleci.com/gh/vscodeshift/react-codemorphs.svg?style=svg)](https://circleci.com/gh/vscodeshift/react-codemorphs)
[![Coverage Status](https://codecov.io/gh/vscodeshift/react-codemorphs/branch/master/graph/badge.svg)](https://codecov.io/gh/vscodeshift/react-codemorphs)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/vscodeshift.react-codemorphs)

Codemod commands for everyday work with React. All commands support Flow, TypeScript, and plain JS.

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

# `addProp`

Adds the identifier under the cursor as a prop to the surrounding component.
Adds a prop type declaration if possible, and binds the identifier via destructuring on `props`
or replaces it with a reference to `props`/`this.props`.

## Example

### Before

```tsx
import * as React from 'react'

interface Props {}

const Foo = (props: Props) => <div>{text}</div>
```

Position cursor in the middle of `text` and then run the command.
The command will prompt you what type to use for the property, enter `string` for example:

### After (with formatting)

```tsx
import * as React from 'react'

interface Props {
  text: string
}

const Foo = (props: Props) => <div>{props.text}</div>
```
