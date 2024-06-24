import { createEmptyEditorState } from './LexicalEditorState';
import { internalGetActiveEditor } from './LexicalUpdates';

// First part (GenericConstructor<InstanceType<Cls>>) is to tell that
// it should be a constructor function.
// Second part (& { [k in keyof Cls]: Cls[k] }) refers to static props
export type KlassConstructor<Cls extends GenericConstructor<any>> =
  GenericConstructor<InstanceType<Cls>> & { [k in keyof Cls]: Cls[k] };
type GenericConstructor<T> = new (...args: any[]) => T;

export type EditorThemeClasses = {
  [key: string]: any;
};

export type CreateEditorArgs = {
  disableEvents?: boolean;
  parentEditor?: LexicalEditor;
  theme?: EditorThemeClasses;
};

export function createEditor(editorConfig?: CreateEditorArgs): LexicalEditor {
  const config = editorConfig || {};
  const activeEditor = internalGetActiveEditor();
  const theme = config.theme || {};
  const parentEditor =
    editorConfig === undefined ? activeEditor : config.parentEditor || null;
  const disableEvents = config.disableEvents || false;
  const editorState = createEmptyEditorState();

  const editor = new LexicalEditor();

  return editor;
}

export class LexicalEditor {}
