/* eslint-disable @typescript-eslint/no-var-requires */

import * as vscode from 'vscode'
import applyTransform from '@vscodeshift/apply-jscodeshift'
import hasFlowAnnotation from 'react-codemorphs/util/hasFlowAnnotation'
import { Options } from 'jscodeshift'

export function activate(context: vscode.ExtensionContext): void {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      'extension.wrapWithJSXElement',
      async () => {
        const name = await vscode.window.showInputBox({
          prompt: 'name of element to wrap with',
        })
        if (!name) return
        await applyTransform(require('react-codemorphs/wrapWithJSXElement'), {
          name,
        })
        await vscode.commands.executeCommand('editor.action.formatDocument')
      }
    )
  )
  context.subscriptions.push(
    vscode.commands.registerCommand(
      'extension.wrapWithChildFunctionElement',
      async () => {
        const name = await vscode.window.showInputBox({
          prompt: 'name of element to wrap with',
        })
        if (!name) return
        await applyTransform(
          require('react-codemorphs/wrapWithChildFunctionElement'),
          { name }
        )
        await vscode.commands.executeCommand('editor.action.formatDocument')
      }
    )
  )
  context.subscriptions.push(
    vscode.commands.registerCommand('extension.addProp', async () => {
      let hasType = false
      await applyTransform(({ source, path }, { j }): void => {
        hasType = /\.tsx?$/.test(path) || hasFlowAnnotation(j(source))
      }).catch(() => {
        // ignore
      })
      const options: Options = {}
      if (hasType) {
        options.typeAnnotation = await vscode.window.showInputBox({
          prompt: 'type annotation',
        })
      }
      await applyTransform(require('react-codemorphs/addProp'), options)
      await vscode.commands.executeCommand('editor.action.formatDocument')
    })
  )
}

export function deactivate(): void {} // eslint-disable-line @typescript-eslint/no-empty-function
