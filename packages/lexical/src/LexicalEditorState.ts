import { NodeMap } from './LexicalNode';

export function createEmptyEditorState(): EditorState {
  // TODO: instead of empty object, switch with $createRootNode
  return new EditorState(new Map([['root', {}]]));
}

export class EditorState {
  _nodeMap: NodeMap;

  constructor(nodeMap: NodeMap) {
    this._nodeMap = nodeMap;
  }
}
