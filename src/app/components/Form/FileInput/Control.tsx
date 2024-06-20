import React, { type ComponentProps } from 'react'

export type ControlProps = ComponentProps<'input'>

export function Control(props: ControlProps) {
  return <input type="file" className="sr-only" id="photoFile" {...props} />
}
