import { type ComponentProps } from 'react'

export type RootPros = ComponentProps<'div'>

export function Root(props: RootPros) {
  return <div {...props} />
}
