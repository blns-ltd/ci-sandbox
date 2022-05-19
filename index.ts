import { EffectedTerminalText as ett } from "terminal-text-effect";

let effect = ett.newEffect()

console.log(
    effect.bold().red().parse("Salve\n")
);

console.log("Wololo!\n")

console.log(
    effect.reset().bold().blue().parse("Sane")
)