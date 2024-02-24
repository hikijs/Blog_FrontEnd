'use client'
import { defaultEditorContent } from '../../utils/default-content'
import React, { useEffect, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import {
  defaultEditorProps,
  Editor,
  EditorRoot,
  EditorBubble,
  EditorCommand,
  EditorCommandItem,
  EditorCommandEmpty,
  EditorContent,
  type JSONContent
} from '../Tiptap/Components'

import { ImageResizer } from '../Tiptap/Extensions'
// import { ImageResizer } from 'novel/extensions'
import { defaultExtensions } from './Utils/PostExtensions'
import { Separator } from './UI/Editor_UI_Separator'
import { NodeSelector } from './Selector/NodeListSelector'
import { LinkSelector } from './Selector/LinkSelector'
import { ColorSelector } from './Selector/ColorSelector'

import { TextButtons } from './Selector/TypeTextSelector'
import { slashCommand, suggestionItems } from './Utils/SlashCommand'

const extensions = [...defaultExtensions, slashCommand]

const NewPostEditor = () => {
  const [initialContent, setInitialContent] = useState<null | JSONContent>(null)
  const [saveStatus, setSaveStatus] = useState('Saved')

  const [openNode, setOpenNode] = useState(false)
  const [openColor, setOpenColor] = useState(false)
  const [openLink, setOpenLink] = useState(false)

  const debouncedUpdates = useDebouncedCallback(async (editor: Editor) => {
    const json = editor.getJSON()

    window.localStorage.setItem('novel-content', JSON.stringify(json))
    setSaveStatus('Saved')
  }, 500)

  useEffect(() => {
    const content = window.localStorage.getItem('novel-content')
    if (content) setInitialContent(JSON.parse(content))
    else setInitialContent(defaultEditorContent)
  }, [])

  if (!initialContent) return null

  return (
    <div className='relative w-full'>
      <div className='absolute right-5 top-5 z-10 mb-5 rounded-lg bg-accent px-2 py-1 text-sm text-muted-foreground'>
        {saveStatus}
      </div>
      <EditorRoot>
        <EditorContent
          initialContent={initialContent}
          extensions={extensions}
          className='relative min-h-[800px] w-full p-10 shadow-lg border border-lightBlue shadow-lightBlue bg-white rounded-lg'
          editorProps={{
            ...defaultEditorProps,
            attributes: {
              class: `prose-lg prose-stone dark:prose-invert prose-headings:font-title font-default focus:outline-none max-w-full`
            }
          }}
          onUpdate={({ editor }) => {
            debouncedUpdates(editor)
            setSaveStatus('Unsaved')
          }}
          slotAfter={<ImageResizer />}
        >
          <EditorCommand className='z-50 mb-5 h-auto max-h-[330px] w-72 overflow-y-auto rounded-md border border-lightBlue shadow-md bg-white px-2 py-2 transition-all'>
            <EditorCommandEmpty className='px-2 text-muted-foreground'>No results</EditorCommandEmpty>
            {suggestionItems.map((item) => (
              <EditorCommandItem
                value={item.title}
                onCommand={(val) => item.command(val)}
                className={`flex w-full items-center space-x-2 rounded-md px-2 py-1 text-left text-sm cursor-pointer hover:bg-blue`}
                key={item.title}
              >
                <div className='flex h-10 w-10 items-center justify-center rounded-md shadow-sm bg-white border border-lightBlue'>
                  {item.icon}
                </div>
                <div>
                  <p className='font-medium'>{item.title}</p>
                  <p className='text-xs text-muted-foreground'>{item.description}</p>
                </div>
              </EditorCommandItem>
            ))}
          </EditorCommand>

          <EditorBubble
            tippyOptions={{
              placement: 'top'
            }}
            className='flex w-fit max-w-[90vw] overflow-hidden rounded border border-lightBlue bg-white shadow-xl'
          >
            <Separator orientation='vertical' />
            <NodeSelector open={openNode} onOpenChange={setOpenNode} />
            <Separator orientation='vertical' />

            <LinkSelector open={openLink} onOpenChange={setOpenLink} />
            <Separator orientation='vertical' />
            <TextButtons />
            <Separator orientation='vertical' />
            <ColorSelector open={openColor} onOpenChange={setOpenColor} />
          </EditorBubble>
        </EditorContent>
      </EditorRoot>
    </div>
  )
}

export default NewPostEditor
