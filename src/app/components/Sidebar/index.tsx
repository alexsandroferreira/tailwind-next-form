'use client'
import * as Collpsible from '@radix-ui/react-collapsible'
import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Menu,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'

import { Button } from '../Button'
import { Input } from '../Input'
import Logo from './Logo'
import NavItem from './NavItem'
import Profile from './Profile'
import UsedSpaceWidget from './UsedSpaceWidget'

export function Sidebar() {
  return (
    <Collpsible.Root
      className="
    fixed left-0 right-0 top-0 z-20 flex flex-col 
    gap-6 border-b border-zinc-200 bg-white p-4
    data-[state=open]:bottom-0 dark:border-zinc-900 dark:bg-zinc-900 lg:right-auto 
    lg:w-80 lg:border-r lg:px-5 
    lg:py-8
    lg:data-[state=closed]:bottom-0
    "
    >
      <div className="flex items-center justify-between">
        <Logo />
        <Collpsible.Trigger asChild className="">
          <Button className=" lg:sr-only" variant="ghost">
            <Menu className=" h-6 w-6" />
          </Button>
        </Collpsible.Trigger>
      </div>

      <Collpsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control placeholder="Search" />
        </Input.Root>

        <nav className="space-y-0.5">
          <NavItem title="Home" icon={Home} />
          <NavItem title="Dashbord" icon={BarChart} />
          <NavItem title="Projects" icon={SquareStack} />
          <NavItem title="Task" icon={CheckSquare} />
          <NavItem title="Reporting" icon={Flag} />
          <NavItem title="Users" icon={Users} />
        </nav>
        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem title="Support" icon={LifeBuoy} />
            <NavItem title="Setting" icon={Cog} />
          </nav>

          <UsedSpaceWidget />

          <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

          <Profile />
        </div>
      </Collpsible.Content>
    </Collpsible.Root>
  )
}
