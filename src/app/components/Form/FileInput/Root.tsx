'use client'
import {
  type ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

export type RootPros = ComponentProps<'div'>

type FileInputContextType = {
  id: string
  files: File[]
  onFilesSelected: (file: File[]) => void
}

const FileInputContext = createContext({} as FileInputContextType)

export function Root(props: RootPros) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected: setFiles }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
