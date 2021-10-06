import { helper } from '@ember/component/helper'
import { get } from '@ember/object'

export function objectPick(object, key) {

  if ( !object ) {
    return {}
  }

  return  get(object, key)
}

export default helper((params) => objectPick(...params))
