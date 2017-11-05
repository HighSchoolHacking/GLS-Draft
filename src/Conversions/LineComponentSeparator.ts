
/**
 * Separates lines into their command names and parameters.
 */
export class LineComponentSeparator {
    private static readonly quoteCharacters = new Set(["'", '"', "`"]);

    /**
     * Separates a line into its command name and parameters.
     *
     * @param line   A raw line of GLS syntax.
     * @returns The line's command name, followed by any parameters.
     * @remarks This assumes the line is already whitespace-trimmed.
     */
    public separate(line: string): string[] {
        const colonIndex: number = line.indexOf(":");
        if (colonIndex === -1) {
            return [line.trim()];
        }

        const output: string[] = [line.substring(0, colonIndex).trim()];

        for (let i: number = colonIndex + 2; i < line.length; i += 1) {
            let end: number;
            let nextStart: number;

            switch (line[i]) {
                case "{":
                    end = this.findSearchEnd(line, i, line[i], "}") + 1;
                    if (end === 0) {
                        throw new Error(`Could not find end for '{' starting at position ${i}.`);
                    }

                    nextStart = end;
                    break;

                case "(":
                    end = this.findSearchEnd(line, i, line[i], ")");
                    if (end === -1) {
                        throw new Error(`Could not find end for '(' starting at position ${i}.`);
                    }

                    nextStart = end + 1;
                    i += 1;
                    break;

                case "\"":
                    end = line.indexOf("\"", i);
                    if (end === -1) {
                        throw new Error(`Could not find end for '"' starting at position ${i}.`);
                    }

                    end += 1;
                    nextStart = end;
                    break;

                default:
                    end = this.findSearchEnd(line, i, " ", " ");
                    nextStart = end;
            }

            if (end === -1) {
                end = nextStart = line.length;
            }

            if (i !== end) {
                output.push(line.substring(i, end));
            }

            i = nextStart;
        }

        return output;
    }

    /**
     * Finds the corresponding end position for a starting separator.
     *
     * @param text   The String to search within.
     * @param index   The starting location of the starting separator.
     * @param starter   The starting separator, such as "{".
     * @param ender   The ending separator, such as "}".
     * @returns The position of the starter's corresponding ender.
     */
    private findSearchEnd(text: string, index: number, starter: string, ender: string): number {
        let numStarts = 1;
        let insideQuotes = false;

        for (let i: number = index + 1; i < text.length; i += 1) {
            const current: string = text[i];

            if (LineComponentSeparator.quoteCharacters.has(current)) {
                insideQuotes = !insideQuotes;
            } else if (!insideQuotes) {
                if (current === ender) {
                    numStarts -= 1;
                    if (numStarts === 0) {
                        return i;
                    }
                } else if (current === starter) {
                    numStarts += 1;
                }
            }
        }

        return -1;
    }
}