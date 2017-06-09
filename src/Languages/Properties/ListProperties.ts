import { NativeCallProperties } from "./NativeCallProperties";

/**
 * Metadata on a language's lists.
 */
export class ListProperties {
    /**
     * Whether the language uses flexible arrays.
     */
    public add: NativeCallProperties;

    /**
     * Whether the language uses flexible arrays.
     */
    public asArray: boolean;

    /**
     * The name of the list class.
     */
    public className: string;

    /**
     * Adds two or more lists together
     */
     public concat: NativeCallProperties;
     
    /**
     * How to retrieve the length of a list.
     */
    public length: NativeCallProperties;

    /**
     * How to remove an element from the end of a list.
     */
    public pop: NativeCallProperties;

    /**
     * How to add an element to the end of a list.
     */
    public push: NativeCallProperties;

    /**
     * Required imports to be able to use lists.
     */
    public requiredImports: { [i: string]: string[] };
}
