/**
 * This function help you prefix a css class name, default is molecule.
 * Example: prefixClaName('test') will return 'molecule-test',
 * prefixClaName('test', 'c') will return 'c-test'
 * @param name Default class name
 * @param prefix The prefix of class name you want to append
 */
export declare function prefixClaName(name: string, prefix?: string): string;
export declare function classNames(...args: any[]): string | undefined;
/**
 * Element names may consist of Latin letters, digits, dashes and underscores.
 * CSS class is formed as block name plus two underscores plus element name: .block__elem
 * @param block
 * @param element
 */
export declare function getBEMElement(block: string, element: string): string;
/**
 * CSS class is formed as block’s or element’s name plus two dashes:
 * .block--mod or .block__elem--mod and .block--color-black with .block--color-red.
 * Spaces in complicated modifiers are replaced by dash.
 * @param blockOrElement
 * @param modifier
 */
export declare function getBEMModifier(blockOrElement: string, modifier: string): string;
