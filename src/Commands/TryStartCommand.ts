import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";
import { CommandMetadata } from "./Metadata/CommandMetadata";

/**
 * A command for the beginning of a try block.
 */
export class TryStartCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static metadata: CommandMetadata = new CommandMetadata(
        CommandNames.TryStart,
        [1],
        []);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return TryStartCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const line: string = this.language.properties.exceptions.try;

        const lines: CommandResult[] = [new CommandResult(line, 0)];
        this.addLineEnder(lines, this.language.properties.exceptions.tryStartRight, 1);

        return new LineResults(lines, false);
    }
}
