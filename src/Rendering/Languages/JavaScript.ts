import { CaseStyle } from "./Casing/CaseStyle";
import { Language } from "./Language";
import { GeneralProperties } from "./Properties/GeneralProperties";
import { ProjectProperties } from "./Properties/ProjectProperties";
import { ArrayNewSizedSyntax } from "./Properties/Syntax/ArrayNewSizedSyntax";
import { ArraySyntax } from "./Properties/Syntax/ArraySyntax";
import { BooleanSyntax } from "./Properties/Syntax/BooleanSyntax";
import { ClassGenericSyntax } from "./Properties/Syntax/ClassGenericSyntax";
import { ClassMemberFunctionSyntax } from "./Properties/Syntax/ClassMemberFunctionSyntax";
import { ClassMemberVariableSyntax } from "./Properties/Syntax/ClassMemberVariableSyntax";
import { ClassStaticFunctionSyntax } from "./Properties/Syntax/ClassStaticFunctionSyntax";
import { ClassStaticVariableSyntax } from "./Properties/Syntax/ClassStaticVariableSyntax";
import { ClassSyntax } from "./Properties/Syntax/ClassSyntax";
import { CommentSyntax } from "./Properties/Syntax/CommentSyntax";
import { ConditionalSyntax } from "./Properties/Syntax/ConditionalSyntax";
import { DictionarySyntax } from "./Properties/Syntax/DictionarySyntax";
import { EnumSyntax } from "./Properties/Syntax/EnumSyntax";
import { ExceptionSyntax } from "./Properties/Syntax/ExceptionSyntax";
import { ExportSyntax } from "./Properties/Syntax/ExportSyntax";
import { FileSyntax } from "./Properties/Syntax/FileSyntax";
import { FunctionSyntax } from "./Properties/Syntax/FunctionSyntax";
import { ImportSyntax } from "./Properties/Syntax/ImportSyntax";
import { InterfaceSyntax } from "./Properties/Syntax/InterfaceSyntax";
import { LambdaSyntax } from "./Properties/Syntax/LambdaSyntax";
import { LambdaTypeInlineSyntax } from "./Properties/Syntax/LambdaTypeInlineSyntax";
import { ListNewItemsSyntax } from "./Properties/Syntax/ListNewItemsSyntax";
import { ListNewSizedSyntax } from "./Properties/Syntax/ListNewSizedSyntax";
import { ListSliceSupport, ListSliceSyntax } from "./Properties/Syntax/ListSliceSyntax";
import { ListSortMembersSyntax, ListSortMemberType } from "./Properties/Syntax/ListSortMembersSyntax";
import { ListSyntax } from "./Properties/Syntax/ListSyntax";
import { LoopSyntax } from "./Properties/Syntax/LoopSyntax";
import { MainSyntax } from "./Properties/Syntax/MainSyntax";
import { MathSyntax } from "./Properties/Syntax/MathSyntax";
import { NativeCallScope, NativeCallSyntax, NativeCallType } from "./Properties/Syntax/NativeCallSyntax";
import { NewInstantiationSyntaxKind, NewSyntax } from "./Properties/Syntax/NewSyntax";
import { OperatorSyntax } from "./Properties/Syntax/OperatorSyntax";
import { ParameterSyntax } from "./Properties/Syntax/ParameterSyntax";
import { PrintingSyntax } from "./Properties/Syntax/PrintingSyntax";
import { SetSyntax } from "./Properties/Syntax/SetSyntax";
import { StandaloneFunctionSyntax } from "./Properties/Syntax/StandaloneFunctionSyntax";
import { StringFormatSyntax } from "./Properties/Syntax/StringFormatSyntax";
import { StringSubstringSupport, StringSubstringSyntax } from "./Properties/Syntax/StringSubstringSyntax";
import { StringSyntax } from "./Properties/Syntax/StringSyntax";
import { StringToNumberStartConversionType, StringToNumberSyntax } from "./Properties/Syntax/StringToNumberSyntax";
import { StyleSyntax } from "./Properties/Syntax/StyleSyntax";
import { UnsupportedSyntax } from "./Properties/Syntax/UnsupportedSyntax";
import { VariableSyntax } from "./Properties/Syntax/VariableSyntax";

/**
 * A summary of information for the JavaScript language.
 */
export class JavaScript extends Language {
    /**
     * Generates general metadata.
     *
     * @param general   A property container for general metadata.
     */
    protected generateGeneralProperties(general: GeneralProperties): void {
        general.directoryCase = CaseStyle.PascalCase;
        general.extension = ".js";
        general.fileCase = CaseStyle.PascalCase;
        general.name = "JavaScript";
    }

    /**
     * Generates project-scale metadata.
     *
     * @param projects   A property container for project-scale metadata.
     */
    protected generateProjectProperties(projects: ProjectProperties): void {
        projects.mainFile = "index.js";
        projects.metadataFiles = {
            "package.json": [
                `{`,
                `    "name": "{name}",`,
                `    "author": {`,
                `        "name": "{author.name}",`,
                `        "email": "{author.email}"`,
                `    },`,
                `    "bugs": {`,
                `        "url": "{repository.url}/issues"`,
                `    },`,
                `    "description": "{description}",`,
                `    "license": "{license}",`,
                `    "repository": {`,
                `        "type": "{repository.type}",`,
                `        "url": "{repository.url}"`,
                `    },`,
                `    "main": "{main}.js",`,
                `    "typings": "{typings}.d.ts",`,
                `    "version": "{version}"`,
                `}`,
            ],
            "src/index.js": [`{{#exports}}`, `export \\{{name}\\} from "{file}";`, `{{/exports}}`],
        };
        projects.nameFormat = CaseStyle.DashLowerCase;
    }

    /**
     * Generates metadata on class generics.
     *
     * @param members   A property container for metadata on class generics.
     */
    protected generateClassGenericSyntax(generics: ClassGenericSyntax): void {
        // Unused
    }

    /**
     * Generates metadata on arrays.
     *
     * @param arrays   A property container for metadata on arrays.
     */
    protected generateArraySyntax(arrays: ArraySyntax): void {
        arrays.className = "Array";
        arrays.initializeAsNew = false;
        arrays.initializeViaStatic = true;
        arrays.length = new NativeCallSyntax("length", NativeCallScope.Member, NativeCallType.Property);
        arrays.newGenericCastRequired = false;
        arrays.requiredImports = [];
    }

    /**
     * Generates metadata on fixed size array creation.
     *
     * @param arrays   A property container for metadata on fixed size array creation.
     */
    protected generateArrayNewSizedSyntax(newSized: ArrayNewSizedSyntax): void {
        newSized.includeType = false;
        newSized.left = "new Array(";
        newSized.right = ")";
    }

    /**
     * Generates metadata on booleans.
     *
     * @param booleans   A property container for metadata on booleans.
     */
    protected generateBooleanSyntax(booleans: BooleanSyntax): void {
        booleans.className = "";
    }

    /**
     * Generates metadata on class member functions.
     *
     * @param functions   A property container for metadata on class member functions.
     */
    protected generateClassMemberFunctionSyntax(functions: ClassMemberFunctionSyntax): void {
        functions.privatePrefix = "";
        functions.protectedPrefix = "";
        functions.publicPrefix = "";

        functions.includeThisReference = false;
        functions.private = "";
        functions.privateCase = CaseStyle.CamelCase;
        functions.protected = "";
        functions.protectedCase = CaseStyle.CamelCase;
        functions.public = "";
        functions.publicCase = CaseStyle.CamelCase;
    }

    /**
     * Generates metadata on class member variables.
     *
     * @param members   A property container for metadata on class member variables.
     */
    protected generateClassMemberVariableSyntax(variables: ClassMemberVariableSyntax): void {
        variables.privateCase = CaseStyle.CamelCase;
        variables.privatePrefix = "";
        variables.protectedPrefix = "";
        variables.publicPrefix = "";

        variables.protectedCase = CaseStyle.CamelCase;
        variables.publicCase = CaseStyle.CamelCase;
        variables.skipMemberVariables = true;
    }

    /**
     * Generates metadata on classes.
     *
     * @param classes   A property container for metadata on classes.
     */
    protected generateClassSyntax(classes: ClassSyntax): void {
        classes.declareEnd = "}";
        classes.declareExtendsRight = "";
        classes.declareStartLeft = "class ";
        classes.newStart = "new ";
        classes.statics.labelBeforePublicity = false;
        classes.this = "this";

        classes.abstractDeclaration = "";
        classes.aliases = {
            char: "string",
            double: "number",
            float: "number",
            int: "number",
        };

        classes.constructors.baseConstructor = "super";
        classes.constructors.private = "";
        classes.constructors.protected = "";
        classes.constructors.public = "";
        classes.constructors.keyword = "constructor";
        classes.constructors.useKeyword = true;

        classes.declareExtendsLeft = " extends ";
        classes.declareImplementsLeft = " implements ";
        classes.declareStartRight = " {";

        classes.instanceOf = new NativeCallSyntax(" instanceof ", NativeCallScope.Operator, NativeCallType.FloatingRight);

        classes.generics.used = false;
    }

    /**
     * Generates metadata on class static functions.
     *
     * @param functions   A property container for metadata on class static functions.
     */
    protected generateClassStaticFunctionSyntax(functions: ClassStaticFunctionSyntax): void {
        functions.label = "static ";
        functions.privatePrefix = "";
        functions.protectedPrefix = "";
        functions.publicPrefix = "";

        functions.private = "";
        functions.privateCase = CaseStyle.CamelCase;
        functions.protected = "";
        functions.protectedCase = CaseStyle.CamelCase;
        functions.public = "";
        functions.publicCase = CaseStyle.CamelCase;
    }

    /**
     * Generates metadata on class static variables.
     *
     * @param members   A property container for metadata on class static variables.
     */
    protected generateClassStaticVariableSyntax(variables: ClassStaticVariableSyntax): void {
        variables.label = "static ";
        variables.privateCase = CaseStyle.CamelCase;
        variables.privatePrefix = "";
        variables.protectedPrefix = "";
        variables.publicPrefix = "";

        variables.skipStaticVariables = true;
        variables.private = "";
        variables.privateCase = CaseStyle.CamelCase;
        variables.protected = "";
        variables.protectedCase = CaseStyle.CamelCase;
        variables.public = "";
        variables.publicCase = CaseStyle.CamelCase;
    }

    /**
     * Generates metadata on comments.
     *
     * @param comments   A property container for metadata on comments.
     */
    protected generateCommentSyntax(comments: CommentSyntax): void {
        comments.blockEnd = "*/";
        comments.blockLineLeft = "";
        comments.blockLineRight = "";
        comments.blockStart = "/*";
        comments.lineLeft = "// ";
        comments.lineRight = "";

        comments.docEnd = " */";
        comments.docLineEnd = "";
        comments.docLineStart = " * ";
        comments.docTagAliases = {
            note: "remarks",
            parameter: "param",
            returns: "returns",
            summary: "",
            todo: "todo",
        };
        comments.docTagsWithParameters = {
            parameter: "",
            summary: "\0",
        };
        comments.docTagEnd = " ";
        comments.docTagSpaceAfter = "  ";
        comments.docTagStart = "@";
        comments.docStart = "/**";
    }

    /**
     * Generates metadata on conditionals.
     *
     * @param conditionals   A property container for metadata on conditionals.
     */
    protected generateConditionalSyntax(conditionals: ConditionalSyntax): void {
        conditionals.elif = "else if";
        conditionals.else = "else";
        conditionals.end = "}";
        conditionals.if = "if";
        conditionals.startLeft = " (";

        conditionals.continueLeft = "} ";
        conditionals.continueRight = " {";
        conditionals.startRight = ") {";
    }

    /**
     * Generates metadata on dictionaries.
     *
     * @param dictionaries   A property container for metadata on dictionaries.
     */
    protected generateDictionarySyntax(dictionaries: DictionarySyntax): void {
        dictionaries.className = "Object";
        dictionaries.containsKey = new NativeCallSyntax("{}.hasOwnProperty.call", NativeCallScope.Static, NativeCallType.Function);
        dictionaries.getLeft = "[";
        dictionaries.getRight = "]";
        dictionaries.initializeAsLiteral = "{}";
        dictionaries.keys = new NativeCallSyntax("Object.keys", NativeCallScope.Static, NativeCallType.Function);
        dictionaries.initializeEnd = "}";
        dictionaries.initializePairComma = ",";
        dictionaries.initializePairLeft = "";
        dictionaries.initializePairMiddle = ": ";
        dictionaries.initializePairRight = "";
        dictionaries.initializeStart = "{";
        dictionaries.requiredImports = [];
        dictionaries.setLeft = "[";
        dictionaries.setMiddle = "] = ";
        dictionaries.setRight = "";
    }

    /**
     * Generates metadata on enums.
     *
     * @param enums   A property container for metadata on enums.
     */
    protected generateEnumSyntax(enums: EnumSyntax): void {
        enums.declareCommaRight = ",";
        enums.declareLastRight = "";
        enums.declareExternal = "const {0} = module.exports.{0} = {";
        enums.declareInternal = "const {0} = {";
        enums.declareValueLeft = ": ";
        enums.declareValueRight = "";
        enums.declareValues = true;
        enums.isObject = true;
        enums.requiredImports = [];
        enums.valueLeft = "";
        enums.valueMiddle = ".";
        enums.valueRight = "";
    }

    /**
     * Generates metadata on exceptions.
     *
     * @param exceptions   A property container for metadata on exceptions.
     */
    protected generateExceptionSyntax(exceptions: ExceptionSyntax): void {
        exceptions.blockEnd = "} ";
        exceptions.catch = "catch";
        exceptions.catchStartLink = " ";
        exceptions.catchStartMiddle = " (";
        exceptions.catchStartRight = ") {";
        exceptions.className = "Error";
        exceptions.finally = "finally";
        exceptions.finallyStartRight = " {";
        exceptions.requiredImports = [];
        exceptions.requiresExceptionType = false;
        exceptions.throw = "throw new";
        exceptions.throwMiddle = "(";
        exceptions.throwRight = ")";
        exceptions.try = "try";
        exceptions.tryStartRight = " {";
        exceptions.variablePrefix = "";
    }

    /**
     * Generates metadata on exported constructs.
     *
     * @param members   A property container for metadata on exported constructs.
     */
    protected generateExportSyntax(exports: ExportSyntax): void {
        exports.exportedIncludesName = true;
        exports.exportedLeft = "exports.";
        exports.exportedMiddle = " = ";
        exports.internal = "";
    }

    /**
     * Generates metadata on file contents.
     *
     * @param files   The property container for metadata on file contents.
     */
    protected generateFileSyntax(files: FileSyntax): void {
        files.endLines = [];
        files.indentation = 0;
        files.startCase = CaseStyle.FileSystemLowerCase;
        files.startLines = [];
    }

    /**
     * Generates metadata on functions.
     *
     * @param functions   A property container for metadata on functions.
     */
    protected generateFunctionSyntax(functions: FunctionSyntax): void {
        functions.case = CaseStyle.CamelCase;
        functions.defineEnd = "}";
        functions.defineStartLeft = "function ";
        functions.defineStartRight = " {";
        functions.explicitNewStaticGenericType = true;
        functions.explicitReturns = false;
        functions.requiresExceptions = false;
    }

    /**
     * Generates metadata on imports.
     *
     * @param imports   A property container for metadata on imports.
     */
    protected generateImportSyntax(imports: ImportSyntax): void {
        imports.case = CaseStyle.DirectoryUpperCase;
        imports.explicitItems = true;
        imports.itemsBeforePackage = true;
        imports.leftAbsolute = "const { ";
        imports.leftLocal = "const { ";
        imports.middle = ' } = require("';
        imports.right = '");';
        imports.useLocalRelativeImports = true;
        imports.useLocalRelativePaths = true;
    }

    /**
     * Generates metadata on interfaces.
     *
     * @param interfaces   A property container for metadata on interfaces.
     */
    protected generateInterfaceSyntax(interfaces: InterfaceSyntax): void {
        interfaces.supported = false;
    }

    /**
     * Generates metadata on lambdas.
     *
     * @param lambdas   A property container for metadata on lambdas.
     */
    protected generateLambdaSyntax(lambdas: LambdaSyntax): void {
        lambdas.callLeft = "(";
        lambdas.callRight = ")";
        lambdas.functionLeft = "(";
        lambdas.functionMiddle = ") => ";
        lambdas.functionRight = "";
        lambdas.parameterTypeRequired = false;
        lambdas.returnTypeRequired = false;
    }

    /**
     * Generates metadata on inline lambda types.
     *
     * @param typeInline   A property container for metadata on inline lambda types.
     */
    protected generateLambdaTypeInlineSyntax(typeInline: LambdaTypeInlineSyntax): void {
        // Unused
    }

    /**
     * Generates metadata on lists.
     *
     * @param lists   A property container for metadata on lists.
     */
    protected generateListSyntax(lists: ListSyntax): void {
        lists.addList = new NativeCallSyntax("concat", NativeCallScope.Member, NativeCallType.Function);
        lists.asArray = true;
        lists.getLeft = "[";
        lists.getRight = "]";
        lists.insert = new NativeCallSyntax("splice", NativeCallScope.Member, NativeCallType.Function).withSeparator(", 0, ");
        lists.length = new NativeCallSyntax("length", NativeCallScope.Member, NativeCallType.Property);
        lists.pop = new NativeCallSyntax("pop", NativeCallScope.Member, NativeCallType.Function);
        lists.popFront = new NativeCallSyntax("shift", NativeCallScope.Member, NativeCallType.Function);
        lists.push = new NativeCallSyntax("push", NativeCallScope.Member, NativeCallType.Function);
        lists.requiredImports = [];
        lists.setLeft = "[";
        lists.setMiddle = "] = ";
        lists.setRight = "";
        lists.sortNumbers = new NativeCallSyntax("sort", NativeCallScope.Member, NativeCallType.Function).withArguments([
            "(a, b) => a - b",
        ]);
        lists.sortStrings = new NativeCallSyntax("sort", NativeCallScope.Member, NativeCallType.Function);
    }

    /**
     * Fills out metadata on list creation with items.
     */
    protected generateListNewItemsSyntax(newItems: ListNewItemsSyntax): void {
        // Unused
    }

    /**
     * Fills out metadata on fixed size list creation.
     */
    protected generateListNewSizedSyntax(newSized: ListNewSizedSyntax): void {
        newSized.includeType = false;
        newSized.left = "new Array(";
        newSized.right = ")";
    }

    /**
     * Fills out metadata on list slicing.
     */
    protected generateListSliceSyntax(slices: ListSliceSyntax): void {
        slices.before = "";
        slices.left = ".slice(";
        slices.middle = ", ";
        slices.right = ")";
        slices.support = ListSliceSupport.Index;
        slices.untilEndDefaultStart = "";
        slices.untilEndLeft = ".slice(";
        slices.untilEndMiddle = "";
        slices.untilEndRightFromIndex = ")";
        slices.untilEndRightFromStart = ")";
    }

    /**
     * Fills out metadata on list sorting by keyed member numbers.
     */
    protected generateListSortMemberNumbersSyntax(sortMembers: ListSortMembersSyntax): void {
        sortMembers.lambdaLeft = ".sort((";
        sortMembers.lambdaMiddleLeft = ") => ";
        sortMembers.lambdaMiddleRight = " < ";
        sortMembers.lambdaRight = " ? -1 : 1)";
        sortMembers.requiredImports = [];
        sortMembers.type = ListSortMemberType.KeyComparator;
    }

    /**
     * Fills out metadata on list sorting by keyed member strings.
     */
    protected generateListSortMemberStringsSyntax(sortMembers: ListSortMembersSyntax): void {
        sortMembers.lambdaLeft = ".sort((";
        sortMembers.lambdaMiddleLeft = ") => ";
        sortMembers.lambdaMiddleRight = " < ";
        sortMembers.lambdaRight = " ? -1 : 1)";
        sortMembers.requiredImports = [];
        sortMembers.type = ListSortMemberType.KeyComparator;
    }

    /**
     * Generates metadata on loops.
     *
     * @param loops   A property container for metadata on loops.
     */
    protected generateLoopSyntax(loops: LoopSyntax): void {
        loops.break = "break";
        loops.continue = "continue";
        loops.for = "for";
        loops.forEachEnd = "}";
        loops.forEachKeyEnd = "}";
        loops.forEachPairEnd = "}";
        loops.forNumbersEnd = "}";
        loops.whileStartLeft = "while";
        loops.whileStartMiddle = " (";
        loops.whileStartRight = ") {";

        loops.foreach = "for";
        loops.forEachGetKeys = "";
        loops.forEachGetPairs = "";
        loops.forEachMiddle = " in ";
        loops.forEachPairsAsKeys = true;
        loops.forEachRight = "";

        loops.forEachStartLeft = "for";
        loops.forEachStartIteration = " (";
        loops.forEachStartSeparator = " of ";
        loops.forEachStartRight = ") {";
    }

    /**
     * Generates metadata on main execution areas.
     *
     * @param main   A property container for metadata on main execution areas.
     */
    protected generateMainSyntax(main: MainSyntax): void {
        main.contextEndLines = [];
        main.contextIndentation = 0;
        main.contextStartLines = [];
        main.group = "";
        main.mainEndLines = [];
        main.mainIndentation = 0;
        main.mainStartLines = [];
    }

    /**
     * Generates metadata on math.
     *
     * @param math   A property container for metadata on math.
     */
    protected generateMathSyntax(math: MathSyntax): void {
        math.absolute = new NativeCallSyntax("Math.abs", NativeCallScope.Static, NativeCallType.Function);
        math.asInt = new NativeCallSyntax("Math.floor", NativeCallScope.Static, NativeCallType.Function);
        math.ceiling = new NativeCallSyntax("Math.ceil", NativeCallScope.Static, NativeCallType.Function);
        math.floor = new NativeCallSyntax("Math.floor", NativeCallScope.Static, NativeCallType.Function);
        math.max = new NativeCallSyntax("Math.max", NativeCallScope.Static, NativeCallType.Function);
        math.min = new NativeCallSyntax("Math.min", NativeCallScope.Static, NativeCallType.Function);
        math.power = new NativeCallSyntax("Math.pow", NativeCallScope.Static, NativeCallType.Function);
        math.mathName = "Math";
    }

    /**
     * Generates metadata on new object instantiation.
     *
     * @param newProp   A property container for metadata on new object instantiation.
     */
    protected generateNewSyntax(newProp: NewSyntax): void {
        newProp.instantiationKind = NewInstantiationSyntaxKind.Prefix;
        newProp.keyword = "new";
    }

    /**
     * Generates metadata on operators.
     *
     * @param operators   A property container for metadata on operators.
     */
    protected generateOperatorSyntax(operators: OperatorSyntax): void {
        operators.and = "&&";
        operators.decreaseBy = "-=";
        operators.divide = "/";
        operators.divideBy = "/=";
        operators.equals = "=";
        operators.greaterThan = ">";
        operators.greaterThanOrEqualTo = ">=";
        operators.increaseBy = "+=";
        operators.lessThan = "<";
        operators.lessThanOrEqualTo = "<=";
        operators.minus = "-";
        operators.mod = "%";
        operators.multiplyBy = "*=";
        operators.not = "!";
        operators.or = "||";
        operators.plus = "+";
        operators.times = "*";

        operators.equalTo = "===";
        operators.notEqualTo = "!==";
    }

    /**
     * Generates metadata on parameters
     *
     * @param parameters    A property container for metadata on parameters
     */
    protected generateParameterSyntax(parameters: ParameterSyntax): void {
        parameters.restDeclarationAfter = false;
        parameters.restDeclarationType = false;
        parameters.restKeywordLeft = "...";
        parameters.restKeywordMiddle = "";
        parameters.restKeywordRight = "";
    }

    /**
     * Generates metadata on printing.
     *
     * @param parameters    A property container for metadata on printing.
     */
    protected generatePrintingSyntax(printing: PrintingSyntax): void {
        printing.end = ")";
        printing.requiredImports = [];
        printing.start = "console.log(";
    }

    /**
     * Generates metadata on sets.
     *
     * @param parameters   A property container for metadata on sets.
     */
    protected generateSetSyntax(sets: SetSyntax): void {
        sets.add = new NativeCallSyntax("add", NativeCallScope.Member, NativeCallType.Function);
        sets.className = "Set";
        sets.contains = new NativeCallSyntax("has", NativeCallScope.Member, NativeCallType.Function);
        sets.initializeAsNew = true;
        sets.initializeStart = "";
        sets.requiredImports = [];
        sets.startItemsLeft = "([";
        sets.startItemsRight = "])";
        sets.startNoItems = "()";
        sets.toArray = new NativeCallSyntax("Array.from", NativeCallScope.Static, NativeCallType.Function);
        sets.toList = sets.toArray;
    }

    /**
     * Generates metadata on standalone functions.
     *
     * @param parameters   A property container for metadata on standalone functions.
     */
    protected generateStandaloneFunctionSyntax(standaloneFunctions: StandaloneFunctionSyntax): void {
        standaloneFunctions.withinStaticClass = false;
    }

    /**
     * Generates metadata on string formatting.
     *
     * @param strings   A property container for metadata on string formatting.
     */
    protected generateStringFormatSyntax(formatting: StringFormatSyntax): void {
        formatting.formatLeft = "`";
        formatting.formatRight = "`";
        formatting.formatInputLeft = "${";
        formatting.formatInputRight = "}";
        formatting.inputTypes = false;
        formatting.useInterpolation = true;
    }

    /**
     * Generates metadata on strings.
     *
     * @param strings   A property container for metadata on strings.
     */
    protected generateStringSyntax(strings: StringSyntax): void {
        strings.caseLower = new NativeCallSyntax("toLowerCase", NativeCallScope.Member, NativeCallType.Function);
        strings.caseUpper = new NativeCallSyntax("toUpperCase", NativeCallScope.Member, NativeCallType.Function);
        strings.className = "String";
        strings.concatenate = " + ";
        strings.indexLeft = "[";
        strings.indexOf = new NativeCallSyntax("indexOf", NativeCallScope.Member, NativeCallType.Function);
        strings.indexOfNotFound = "-1";
        strings.indexRight = "]";
        strings.length = new NativeCallSyntax("length", NativeCallScope.Member, NativeCallType.Property);
        strings.trim = new NativeCallSyntax("trim", NativeCallScope.Member, NativeCallType.Function);
    }

    /**
     * Generates metadata on string substrings.
     *
     * @param strings   A property container for metadata on string substrings.
     */
    protected generateStringSubstringSyntax(substrings: StringSubstringSyntax): void {
        substrings.defaultEnd = "";
        substrings.leftIndex = ".substring(";
        substrings.leftLength = ".substr(";
        substrings.middle = ", ";
        substrings.right = ")";
        substrings.support = StringSubstringSupport.Both;
    }

    /**
     * Generates metadata on string-to-double conversions.
     *
     * @param toDouble   A property container for metadata on string-to-double conversions.
     */
    protected generateStringToDoubleSyntax(toDouble: StringToNumberSyntax): void {
        toDouble.conversionType = StringToNumberStartConversionType.ConvertAndValidate;
        toDouble.perVariableConversionStartLeft = "let ";
        toDouble.perVariableConversionStartMiddle = " = parseFloat(";
        toDouble.perVariableConversionStartRight = ");\n";
        toDouble.validationBlockComparison = "!isNaN({1})";
        toDouble.validationBlockLeft = "\nif (";
        toDouble.validationBlockMiddle = " && ";
        toDouble.validationBlockRight = ") {";
    }

    /**
     * Generates metadata on string-to-int conversions.
     *
     * @param toInt   A property container for metadata on string-to-int conversions.
     */
    protected generateStringToIntSyntax(toInt: StringToNumberSyntax): void {
        toInt.conversionType = StringToNumberStartConversionType.ConvertAndValidate;
        toInt.perVariableConversionStartLeft = "let ";
        toInt.perVariableConversionStartMiddle = " = parseInt(";
        toInt.perVariableConversionStartRight = ");\n";
        toInt.validationBlockComparison = "!isNaN({1})";
        toInt.validationBlockLeft = "\nif (";
        toInt.validationBlockMiddle = " && ";
        toInt.validationBlockRight = ") {";
    }

    /**
     * Generates metadata on style.
     *
     * @param style   A property container for metadata on style.
     */
    protected generateStyleSyntax(style: StyleSyntax): void {
        style.semicolon = ";";
    }

    /**
     * Generates metadata on unsupported complaints.
     *
     * @param style   A property container for metadata on unsupported complaints.
     */
    protected generateUnsupportedSyntax(unsupported: UnsupportedSyntax): void {
        unsupported.complaintEnd = "*/";
        unsupported.complaintStart = "/*";
    }

    /**
     * Generates metadata on variables.
     *
     * @param variables   A property container for metadata on variables.
     */
    protected generateVariableSyntax(variables: VariableSyntax): void {
        variables.declarationRequired = true;

        variables.aliases = {
            infinity: "Infinity",
        };
        variables.declaration = "let ";
        variables.explicitTypes = false;
        variables.null = "undefined";
        variables.typesAfterName = false;
        variables.isNullLeft = "";
        variables.isNotNullLeft = "";
        variables.isNotNullMiddle = " !== ";
        variables.isNullMiddle = " === ";
        variables.nullRight = "undefined";
    }
}
