import { NodeMap } from './LexicalNode';
import { $createRootNode } from './nodes/LexicalRootNode';

export function createEmptyEditorState(): EditorState {
  return new EditorState(new Map([['root', $createRootNode()]]));
}

export class EditorState {
  _nodeMap: NodeMap;

  constructor(nodeMap: NodeMap) {
    this._nodeMap = nodeMap;
  }
}
