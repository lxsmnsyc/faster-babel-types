import * as t from "@babel/types";

export function arrayExpression(
	elements: Array<null | t.Expression | t.SpreadElement>,
): t.ArrayExpression {
	return {
		type: "ArrayExpression",
		elements,
	};
}

export function isArrayExpression(
	node: t.Node | null | undefined,
): node is t.ArrayExpression {
	return node != null && node.type === "ArrayExpression";
}
