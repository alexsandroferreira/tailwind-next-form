/* eslint-disable @next/next/no-img-element */
import { LogOut } from 'lucide-react'
import React from 'react'

import { Button } from '../Button'

export default function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/alexsandroferreira.png"
        alt=""
        className="h-10 w-10 rounded-full"
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Alex Ferreira
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-100">
          alexFerreira@gmail.com
        </span>
      </div>

      <Button variant="ghost" type="button">
        <LogOut className=" h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
