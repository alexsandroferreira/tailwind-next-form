'use client'
import React, { type ComponentProps, useEffect, useState } from 'react'

import { Moon } from './Moon'
import { Sun } from './Sun'
interface LabelProps extends ComponentProps<'label'> {}
export default function Toggle(props: LabelProps) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches
    if (storedTheme) {
      setTheme(storedTheme)
    } else if (prefersDark) {
      setTheme('dark')
    }
  }, [])

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.checked ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <label {...props}>
      <input
        className="peer sr-only"
        type="checkbox"
        onChange={handleToggle}
        checked={theme === 'dark'}
      />
      <div className="flex h-7 w-14 items-center rounded-full bg-zinc-200 px-0.5 dark:bg-zinc-800">
        <div
          className={`absolute flex h-6 w-6  items-center justify-center rounded-full bg-white bg-cover bg-no-repeat transition-transform duration-200 dark:bg-zinc-900 ${
            theme === 'dark'
              ? 'translate-x-7 rotate-0'
              : 'translate-x-0 rotate-180  shadow-inner'
          }`}
        >
          {theme === 'dark' ? <Moon /> : <Sun />}
        </div>
      </div>
    </label>
  )
}
