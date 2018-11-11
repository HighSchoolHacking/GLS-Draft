import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Sets an item in a dictionary.
 */
export class DictionarySetCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.DictionarySet)
        .withDescription("An indexed dictionary lookup")
        .withParameters([
            new SingleParameter("dictionary", "A dictionary to look within.", true),
            new SingleParameter("key", "Key within the dictionary.", true),
            new SingleParameter("value", "Value to store under the key.", true),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return DictionarySetCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        return LineResults.newSingleLine(parameters[1] + "[" + parameters[2] + "] = " + parameters[3]).withAddSemicolon(true);
    }
}