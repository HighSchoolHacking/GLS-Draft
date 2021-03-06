import { Import } from "../../Imports/Import";
import { ListNewItemsSyntax } from "./ListNewItemsSyntax";
import { ListNewSizedSyntax } from "./ListNewSizedSyntax";
import { ListSliceSyntax } from "./ListSliceSyntax";
import { ListSortMembersSyntax } from "./ListSortMembersSyntax";
import { NativeCallSyntax } from "./NativeCallSyntax";

/**
 * Metadata on a language's list syntax.
 */
export class ListSyntax {
    /**
     * Adds two lists together.
     */
    public addList: NativeCallSyntax;

    /**
     * Whether the language uses flexible arrays.
     */
    public asArray: boolean;

    /**
     * The name of the list class.
     */
    public className: string;

    /**
     * Characters before retrieving an item by index.
     */
    public getLeft: string;

    /**
     * Characters after retrieving an item by index.
     */
    public getRight: string;

    /**
     * Inserts an item at an index.
     */
    public insert: NativeCallSyntax;

    /**
     * How to retrieve the length of a list.
     */
    public length: NativeCallSyntax;

    /**
     * Metadata on list with items creation.
     */
    public newItems: ListNewItemsSyntax = new ListNewItemsSyntax();

    /**
     * Metadata on fixed size list creation.
     */
    public newSized: ListNewSizedSyntax = new ListNewSizedSyntax();

    /**
     * How to remove an element from the end of a list.
     */
    public pop: NativeCallSyntax;

    /**
     * How to remove an element from the front of a list.
     */
    public popFront: NativeCallSyntax;

    /**
     * How to add an element to the end of a list.
     */
    public push: NativeCallSyntax;

    /**
     * Required imports to be able to use lists.
     */
    public requiredImports: Import[];

    /**
     * How to start setting an indexed value.
     */
    public setLeft: string;

    /**
     * Characters in the middle of setting an indexed value.
     */
    public setMiddle: string;

    /**
     * How to end setting an indexed value.
     */
    public setRight: string;

    /**
     * Metadata on the language's list slices.
     */
    public slices: ListSliceSyntax = new ListSliceSyntax();

    /**
     * How to sort a list in-place by keyed member numbers.
     */
    public sortMemberNumbers: ListSortMembersSyntax = new ListSortMembersSyntax();

    /**
     * How to sort a list in-place by keyed member strings.
     */
    public sortMemberStrings: ListSortMembersSyntax = new ListSortMembersSyntax();

    /**
     * How to sort a list in-place as numbers.
     */
    public sortNumbers: NativeCallSyntax;

    /**
     * How to sort a list in-place as strings.
     */
    public sortStrings: NativeCallSyntax;
}
