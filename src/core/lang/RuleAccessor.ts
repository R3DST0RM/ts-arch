import { ObjectFilterStarter } from "./ObjectFilterStarter"
import { Buildable } from "../lang/Buildable"
export interface RuleAccessor {
	haveComplexityLowerThan(value: number): Buildable
	beCycleFree(): Buildable
	haveSubjects(): Buildable
	matchName(regex: RegExp): Buildable
	dependOn(): ObjectFilterStarter
}
