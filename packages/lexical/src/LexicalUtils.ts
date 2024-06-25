import type { LexicalNode, NodeKey } from './LexicalNode';

export function $setNodeKey(
  node: LexicalNode,
  existingKey: NodeKey | null | undefined
): void {
  // TODO: switch this with real logic
  node.__key = existingKey;
}
