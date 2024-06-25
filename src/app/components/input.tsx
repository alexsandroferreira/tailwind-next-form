import React, { type ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputPrefixProps extends ComponentProps<'div'> {}

export function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />
}

interface InputControlProps extends ComponentProps<'input'> {}

export function InputControl(props: InputControlProps) {
  return (
    <input
      className="
        flex-1 
        border-0 bg-transparent 
        p-0 text-zinc-900 
      placeholder-zinc-600 outline-none
      dark:text-zinc-100 dark:placeholder-zinc-500
      "
      {...props}
    />
  )
}

interface InputRootProps extends ComponentProps<'div'> {}

export function InputRoot(props: InputRootProps) {
  return (
    <div
      {...props}
      className={twMerge(
        'flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm',
        'focus-within:border-violet-300 focus-within:ring-2 focus-within:ring-violet-100',
        'dark:border-r-zinc-900 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20',
        props.className,
      )}
    />
  )
}

export const Input = {
  Prefix: InputPrefix,
  Control: InputControl,
  Root: InputRoot,
}
