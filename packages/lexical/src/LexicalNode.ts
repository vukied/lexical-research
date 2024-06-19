import type { KlassConstructor } from 'lexical';

export type NodeMap = Map<NodeKey, LexicalNode>;

export type NodeKey = string;

export class LexicalNode {
  // TODO: analyze this
  ['constructor']!: KlassConstructor<typeof LexicalNode>;
}
