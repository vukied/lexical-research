import type { NodeKey } from '../LexicalNode';
import type { KlassConstructor } from 'lexical';
import { LexicalNode } from '../LexicalNode';

/** @noInheritDoc */
export class ElementNode extends LexicalNode {
  ['constructor']!: KlassConstructor<typeof ElementNode>;

  constructor(key?: NodeKey) {
    super(key);
  }
}
