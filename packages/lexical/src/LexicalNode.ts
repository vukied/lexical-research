import type { KlassConstructor } from 'lexical';

import invariant from 'shared/invariant';

import { $setNodeKey } from './LexicalUtils';

export type NodeMap = Map<NodeKey, LexicalNode>;

export type NodeKey = string;

// TODO: finish LexicalNode -> then ElementNode -> RootNode
export class LexicalNode {
  // Allow us to look up the type including static props
  // typeof LexicalNode refers to the constructor function
  // while LexicalNode alone refers to the instance
  ['constructor']!: KlassConstructor<typeof LexicalNode>;
  /** @internal */
  __type: string;
  /** @internal */
  //@ts-ignore We set the key in the constructor.
  __key: string;

  // Flow doesn't support abstract classes unfortunately, so we can't _force_
  // subclasses of Node to implement statics. All subclasses of Node should have
  // a static getType and clone method though. We define getType and clone here so we can call it
  // on any  Node, and we throw this error by default since the subclass should provide
  // their own implementation.
  /**
   * Returns the string type of this node. Every node must
   * implement this and it MUST BE UNIQUE amongst nodes registered
   * on the editor.
   *
   */
  static getType(): string {
    invariant(
      false,
      'LexicalNode: Node %s does not implement .getType().',
      this.name
    );
  }

  constructor(key?: NodeKey) {
    this.__type = this.constructor.getType();
    $setNodeKey(this, key);
  }
}
