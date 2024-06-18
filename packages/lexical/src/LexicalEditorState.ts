import { NodeMap } from './LexicalNode';

export function createEmptyEditorState(): EditorState {
  return new EditorState(new Map([['root', {}]]));
}

export class EditorState {
  _nodeMap: NodeMap;

  constructor(nodeMap: NodeMap) {
    this._nodeMap = nodeMap;
  }
}
