import {type Instance} from '../setup'
import {type keyboardKey} from '../system/keyboard'
import {wait} from '../utils'
import {parseKeyDef} from './parseKeyDef'

interface KeyboardAction {
  keyDef: keyboardKey
  releasePrevious: boolean
  releaseSelf: boolean
  repeat: number
}

export async function keyboard(this: Instance, text: string): Promise<void> {
  const actions: KeyboardAction[] = parseKeyDef(this.config.keyboardMap, text)

  for (let i = 0; i < actions.length; i++) {
    await wait(this.config)

    await keyboardAction(this, actions[i])
  }

  await wait(this.config)
}

async function keyboardAction(
  instance: Instance,
  {keyDef, releasePrevious, releaseSelf, repeat}: KeyboardAction,
) {
  const {system} = instance

  // Release the key automatically if it was pressed before.
  if (system.keyboard.isKeyPressed(keyDef)) {
    await system.keyboard.keyup(instance, keyDef)
    await wait(instance.config)
  }

  if (!releasePrevious) {
    for (let i = 1; i <= repeat; i++) {
      await Promise.resolve(system.keyboard.keydown(instance, keyDef))

      if (i < repeat) {
        await wait(instance.config)
      }
    }

    // Release the key only on the last iteration on `state.repeatKey`.
    if (releaseSelf) {
      await Promise.resolve(system.keyboard.keyup(instance, keyDef))
    }
  }
}

export async function releaseAllKeys(instance: Instance) {
  const pressedKeys = instance.system.keyboard.getPressedKeys()

  for (const k of pressedKeys) {
    await instance.system.keyboard.keyup(instance, k)
    await wait(instance.config)
  }
}
