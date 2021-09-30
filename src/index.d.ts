export interface Options {
  /**
   * Make it do something.
   *
   * @default false
   */
  readonly doSomething?: boolean;
}

/**
 * Does pretty much nothing, contrary to its name.
 */
export function something(options?: Options): void;
