import { ElementNode } from './LexicalElementNode';

/** @noInheritDoc */
export class RootNode extends ElementNode {
  static getType(): string {
    return 'root';
  }

  constructor() {
    super('root');
  }
}

export function $createRootNode(): RootNode {
  return new RootNode();
}
