/*
 *   Copyright (c) 2024 妙码学院 @Heyi
 *   All rights reserved.
 *   让进取的人更具职业价值
 */
import { Extension } from '@tiptap/core'
import { Plugin } from '@tiptap/pm/state'

import { findColors } from '../helper'

export const ColorHighlighter = Extension.create({
    name: 'colorHighlighter',

    addProseMirrorPlugins() {
        return [
            new Plugin({
                state: {
                    init(_, { doc }) {
                        return findColors(doc)
                    },
                    apply(transaction, oldState) {
                        return transaction.docChanged ? findColors(transaction.doc) : oldState
                    }
                },
                props: {
                    decorations(state) {
                        return this.getState(state)
                    }
                }
            })
        ]
    }
})
