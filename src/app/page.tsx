import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'

import * as FileInput from './components/Form/FileInput'
import { Select } from './components/Form/Select'
import { SelectItem } from './components/Form/Select/SelectItem'
import { Textarea } from './components/Form/Textarea'
import { Input } from './components/input'
import SettingsTabs from './components/SettingsTabs'
export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal Info</h2>
            <span className="text-sm text-zinc-500">
              Uptade your photo and personal details here.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="rounded-lg border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-100"
              type="button"
            >
              Cancel
            </button>
            <button
              className=" rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
              type="submit"
              form="settings"
            >
              Save
            </button>
          </div>
        </div>

        <form
          id="settings"
          action=""
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6 ">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="João" />
              </Input.Root>

              <Input.Root>
                <Input.Control id="lastName" defaultValue="João" />
              </Input.Root>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email Address
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="str h-4 w-4 text-zinc-500" strokeWidth={3} />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue="joao@gmail"
              />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="photoFile"
              className="cursor-pointer text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>

            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <Input.Root>
              <Input.Control id="role" defaultValue="CTO" />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>
            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United States" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
            <Select placeholder="Select a timezon...">
              <SelectItem
                value="utc8"
                text="Pacific Standard Time (UTC-08:00)"
              />
              <SelectItem value="utc3" text="America São Paulo(UTC-03:00)" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short intruduction.
              </span>
            </label>
            <div className="space-y-3">
              <div className="grid  grid-cols-2 gap-3">
                <Select defaultValue="Normal">
                  <SelectItem
                    value="Normal"
                    defaultChecked
                    text="Normal Text"
                  />
                  <SelectItem value="md" text="Markdown" />
                </Select>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className=" rounded-md p-2 hover:bg-zinc-100"
                  >
                    <Bold
                      className=" str h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </button>
                  <button
                    type="button"
                    className=" rounded-md p-2 hover:bg-zinc-100"
                  >
                    <Italic
                      className=" str h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </button>
                  <button
                    type="button"
                    className=" rounded-md p-2 hover:bg-zinc-100"
                  >
                    <Link
                      className=" str h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </button>
                  <button
                    type="button"
                    className=" rounded-md p-2 hover:bg-zinc-100"
                  >
                    <List
                      className=" str h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </button>
                  <button
                    type="button"
                    className=" rounded-md p-2 hover:bg-zinc-100"
                  >
                    <ListOrdered
                      className=" str h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </button>
                </div>
              </div>
              <Textarea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              className="rounded-lg border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-100"
              type="button"
            >
              Cancel
            </button>
            <button
              className=" rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
