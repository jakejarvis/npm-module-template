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
 *
 * @example
 * ```
 * import { something } from "@jakejarvis/my-module";
 *
 * something({ doSomething: true });
 * ```
 */
export function something(options?: Options): void;
