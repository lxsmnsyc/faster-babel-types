import type * as t from '@babel/types';

export const enum NodeGroup {
  Standardized = 1,
  Expression = 2,
  Binary = 4,
  Scopable = 8,
  BlockParent = 16,
  Block = 32,
  Statement = 64,
  Terminatorless = 128,
  CompletionStatement = 256,
  Conditional = 512,
  Loop = 1024,
  While = 2048,
  ExpressionWrapper = 4096,
  For = 8192,
  ForXStatement = 16384,
  Function = 32768,
  FunctionParent = 65536,
  Pureish = 131072,
  Declaration = 262144,
  PatternLike = 524288,
  LVal = 1048576,
  TSEntityName = 2097152,
  Literal = 4194304,
  Immutable = 8388608,
  UserWhitespacable = 16777216,
  Method = 33554432,
  ObjectMember = 67108864,
  Property = 134217728,
  UnaryLike = 268435456,
  Pattern = 536870912,
  Class = 1073741824,
  ImportOrExportDeclaration = 2147483648,
  ExportDeclaration = 4294967296,
  ModuleSpecifier = 8589934592,
  Accessor = 17179869184,
  Private = 34359738368,
  Flow = 68719476736,
  FlowType = 137438953472,
  FlowBaseAnnotation = 274877906944,
  FlowDeclaration = 549755813888,
  FlowPredicate = 1099511627776,
  EnumBody = 2199023255552,
  EnumMember = 4398046511104,
  JSX = 8796093022208,
  Miscellaneous = 17592186044416,
  TypeScript = 35184372088832,
  TSType = 70368744177664,
  TSTypeElement = 140737488355328,
  TSBaseType = 281474976710656,
  ModuleDeclaration = 562949953421312,
}

export const NodeFlags: Record<t.Node['type'], number> = {
  ArrayExpression: NodeGroup.Standardized | NodeGroup.Expression,
  AssignmentExpression: NodeGroup.Standardized | NodeGroup.Expression,
  BinaryExpression:
    NodeGroup.Standardized | NodeGroup.Expression | NodeGroup.Binary,
  InterpreterDirective: NodeGroup.Standardized,
  Directive: NodeGroup.Standardized,
  DirectiveLiteral: NodeGroup.Standardized,
  BlockStatement:
    NodeGroup.Standardized |
    NodeGroup.Scopable |
    NodeGroup.Block |
    NodeGroup.BlockParent |
    NodeGroup.Statement,
  BreakStatement:
    NodeGroup.Standardized |
    NodeGroup.Statement |
    NodeGroup.Terminatorless |
    NodeGroup.CompletionStatement,
  CallExpression: NodeGroup.Standardized | NodeGroup.Expression,
  CatchClause:
    NodeGroup.Standardized | NodeGroup.Scopable | NodeGroup.BlockParent,
  ConditionalExpression:
    NodeGroup.Standardized | NodeGroup.Expression | NodeGroup.Conditional,
  ContinueStatement:
    NodeGroup.Standardized |
    NodeGroup.Statement |
    NodeGroup.Terminatorless |
    NodeGroup.CompletionStatement,
  DebuggerStatement: NodeGroup.Standardized | NodeGroup.Statement,
  DoWhileStatement:
    NodeGroup.Standardized |
    NodeGroup.Statement |
    NodeGroup.Scopable |
    NodeGroup.BlockParent |
    NodeGroup.Loop |
    NodeGroup.While,
  EmptyStatement: NodeGroup.Standardized | NodeGroup.Statement,
  ExpressionStatement:
    NodeGroup.Standardized | NodeGroup.Statement | NodeGroup.ExpressionWrapper,
  File: NodeGroup.Standardized,
  ForInStatement:
    NodeGroup.Standardized |
    NodeGroup.Statement |
    NodeGroup.Scopable |
    NodeGroup.BlockParent |
    NodeGroup.Loop |
    NodeGroup.For |
    NodeGroup.ForXStatement,
  ForStatement:
    NodeGroup.Standardized |
    NodeGroup.Statement |
    NodeGroup.Scopable |
    NodeGroup.BlockParent |
    NodeGroup.Loop |
    NodeGroup.For,
  FunctionDeclaration:
    NodeGroup.Standardized |
    NodeGroup.Statement |
    NodeGroup.Scopable |
    NodeGroup.BlockParent |
    NodeGroup.Function |
    NodeGroup.FunctionParent |
    NodeGroup.Pureish |
    NodeGroup.Declaration,
  FunctionExpression:
    NodeGroup.Standardized |
    NodeGroup.Expression |
    NodeGroup.Scopable |
    NodeGroup.BlockParent |
    NodeGroup.Function |
    NodeGroup.FunctionParent |
    NodeGroup.Pureish,
  Identifier:
    NodeGroup.Standardized |
    NodeGroup.Expression |
    NodeGroup.PatternLike |
    NodeGroup.LVal |
    NodeGroup.TSEntityName,
  IfStatement:
    NodeGroup.Standardized | NodeGroup.Statement | NodeGroup.Conditional,
  LabeledStatement: NodeGroup.Standardized | NodeGroup.Statement,
  StringLiteral:
    NodeGroup.Standardized |
    NodeGroup.Expression |
    NodeGroup.Pureish |
    NodeGroup.Literal |
    NodeGroup.Immutable,
  NumericLiteral:
    NodeGroup.Standardized |
    NodeGroup.Expression |
    NodeGroup.Pureish |
    NodeGroup.Literal |
    NodeGroup.Immutable,
  NullLiteral:
    NodeGroup.Standardized |
    NodeGroup.Expression |
    NodeGroup.Pureish |
    NodeGroup.Literal |
    NodeGroup.Immutable,
  BooleanLiteral:
    NodeGroup.Standardized |
    NodeGroup.Expression |
    NodeGroup.Pureish |
    NodeGroup.Literal |
    NodeGroup.Immutable,
  RegExpLiteral:
    NodeGroup.Standardized |
    NodeGroup.Expression |
    NodeGroup.Pureish |
    NodeGroup.Literal,
  LogicalExpression:
    NodeGroup.Standardized | NodeGroup.Expression | NodeGroup.Binary,
  MemberExpression:
    NodeGroup.Standardized | NodeGroup.Expression | NodeGroup.LVal,
  NewExpression: NodeGroup.Standardized | NodeGroup.Expression,
  Program:
    NodeGroup.Standardized |
    NodeGroup.Scopable |
    NodeGroup.BlockParent |
    NodeGroup.Block,
  ObjectExpression: NodeGroup.Standardized | NodeGroup.Expression,
  ObjectMethod:
    NodeGroup.Standardized |
    NodeGroup.Scopable |
    NodeGroup.BlockParent |
    NodeGroup.Function |
    NodeGroup.FunctionParent |
    NodeGroup.UserWhitespacable |
    NodeGroup.Method |
    NodeGroup.ObjectMember,
  ObjectProperty:
    NodeGroup.Standardized |
    NodeGroup.UserWhitespacable |
    NodeGroup.ObjectMember |
    NodeGroup.Property,
  RestElement: NodeGroup.Standardized | NodeGroup.PatternLike | NodeGroup.LVal,
  ReturnStatement:
    NodeGroup.Standardized |
    NodeGroup.Statement |
    NodeGroup.Terminatorless |
    NodeGroup.CompletionStatement,
  SequenceExpression: NodeGroup.Standardized | NodeGroup.Expression,
  ParenthesizedExpression:
    NodeGroup.Standardized | NodeGroup.Expression | NodeGroup.ExpressionWrapper,
  SwitchCase: NodeGroup.Standardized,
  SwitchStatement:
    NodeGroup.Standardized |
    NodeGroup.Statement |
    NodeGroup.Scopable |
    NodeGroup.BlockParent,
  ThisExpression: NodeGroup.Standardized | NodeGroup.Expression,
  ThrowStatement:
    NodeGroup.Standardized |
    NodeGroup.Statement |
    NodeGroup.Terminatorless |
    NodeGroup.CompletionStatement,
  TryStatement: NodeGroup.Standardized | NodeGroup.Statement,
  UnaryExpression:
    NodeGroup.Standardized | NodeGroup.Expression | NodeGroup.UnaryLike,
  UpdateExpression: NodeGroup.Standardized | NodeGroup.Expression,
  VariableDeclaration:
    NodeGroup.Standardized | NodeGroup.Statement | NodeGroup.Declaration,
  VariableDeclarator: NodeGroup.Standardized,
  WhileStatement:
    NodeGroup.Standardized |
    NodeGroup.Statement |
    NodeGroup.Scopable |
    NodeGroup.BlockParent |
    NodeGroup.Loop |
    NodeGroup.While,
  WithStatement: NodeGroup.Standardized | NodeGroup.Statement,
  AssignmentPattern:
    NodeGroup.Standardized |
    NodeGroup.PatternLike |
    NodeGroup.Pattern |
    NodeGroup.LVal,
  ArrayPattern:
    NodeGroup.Standardized |
    NodeGroup.PatternLike |
    NodeGroup.Pattern |
    NodeGroup.LVal,
  ArrowFunctionExpression:
    NodeGroup.Standardized |
    NodeGroup.Expression |
    NodeGroup.Scopable |
    NodeGroup.BlockParent |
    NodeGroup.Function |
    NodeGroup.FunctionParent |
    NodeGroup.Pureish,
  ClassBody: NodeGroup.Standardized,
  ClassExpression:
    NodeGroup.Standardized |
    NodeGroup.Expression |
    NodeGroup.Scopable |
    NodeGroup.Class,
  ClassDeclaration:
    NodeGroup.Standardized |
    NodeGroup.Statement |
    NodeGroup.Scopable |
    NodeGroup.Declaration |
    NodeGroup.Class,
  ExportAllDeclaration:
    NodeGroup.Standardized |
    NodeGroup.Statement |
    NodeGroup.Declaration |
    NodeGroup.ImportOrExportDeclaration |
    NodeGroup.ExportDeclaration |
    NodeGroup.ModuleDeclaration,
  ExportDefaultDeclaration:
    NodeGroup.Standardized |
    NodeGroup.Statement |
    NodeGroup.Declaration |
    NodeGroup.ImportOrExportDeclaration |
    NodeGroup.ExportDeclaration |
    NodeGroup.ModuleDeclaration,
  ExportNamedDeclaration:
    NodeGroup.Standardized |
    NodeGroup.Statement |
    NodeGroup.Declaration |
    NodeGroup.ImportOrExportDeclaration |
    NodeGroup.ExportDeclaration |
    NodeGroup.ModuleDeclaration,
  ExportSpecifier: NodeGroup.Standardized | NodeGroup.ModuleSpecifier,
  ForOfStatement:
    NodeGroup.Standardized |
    NodeGroup.Statement |
    NodeGroup.Scopable |
    NodeGroup.BlockParent |
    NodeGroup.Loop |
    NodeGroup.For |
    NodeGroup.ForXStatement,
  ImportDeclaration:
    NodeGroup.Standardized |
    NodeGroup.Statement |
    NodeGroup.Declaration |
    NodeGroup.ImportOrExportDeclaration |
    NodeGroup.ModuleDeclaration,
  ImportDefaultSpecifier: NodeGroup.Standardized | NodeGroup.ModuleSpecifier,
  ImportNamespaceSpecifier: NodeGroup.Standardized | NodeGroup.ModuleSpecifier,
  ImportSpecifier: NodeGroup.Standardized | NodeGroup.ModuleSpecifier,
  ImportExpression: NodeGroup.Standardized | NodeGroup.Expression,
  MetaProperty: NodeGroup.Standardized | NodeGroup.Expression,
  ClassMethod:
    NodeGroup.Standardized |
    NodeGroup.Scopable |
    NodeGroup.BlockParent |
    NodeGroup.Function |
    NodeGroup.FunctionParent |
    NodeGroup.Method,
  ObjectPattern:
    NodeGroup.Standardized |
    NodeGroup.PatternLike |
    NodeGroup.Pattern |
    NodeGroup.LVal,
  SpreadElement: NodeGroup.Standardized | NodeGroup.UnaryLike,
  Super: NodeGroup.Standardized | NodeGroup.Expression,
  TaggedTemplateExpression: NodeGroup.Standardized | NodeGroup.Expression,
  TemplateElement: NodeGroup.Standardized,
  TemplateLiteral:
    NodeGroup.Standardized | NodeGroup.Expression | NodeGroup.Literal,
  YieldExpression:
    NodeGroup.Standardized | NodeGroup.Expression | NodeGroup.Terminatorless,
  AwaitExpression:
    NodeGroup.Standardized | NodeGroup.Expression | NodeGroup.Terminatorless,
  Import: NodeGroup.Standardized | NodeGroup.Expression,
  BigIntLiteral:
    NodeGroup.Standardized |
    NodeGroup.Expression |
    NodeGroup.Literal |
    NodeGroup.Pureish |
    NodeGroup.Immutable,
  ExportNamespaceSpecifier: NodeGroup.Standardized | NodeGroup.ModuleSpecifier,
  OptionalMemberExpression: NodeGroup.Standardized | NodeGroup.Expression,
  OptionalCallExpression: NodeGroup.Standardized | NodeGroup.Expression,
  ClassProperty: NodeGroup.Standardized | NodeGroup.Property,
  ClassAccessorProperty:
    NodeGroup.Standardized | NodeGroup.Property | NodeGroup.Accessor,
  ClassPrivateProperty:
    NodeGroup.Standardized | NodeGroup.Property | NodeGroup.Private,
  ClassPrivateMethod:
    NodeGroup.Standardized |
    NodeGroup.Scopable |
    NodeGroup.BlockParent |
    NodeGroup.Function |
    NodeGroup.FunctionParent |
    NodeGroup.Method |
    NodeGroup.Private,
  PrivateName: NodeGroup.Standardized | NodeGroup.Private,
  StaticBlock:
    NodeGroup.Standardized |
    NodeGroup.Scopable |
    NodeGroup.BlockParent |
    NodeGroup.FunctionParent,
  TypeCastExpression:
    NodeGroup.Expression | NodeGroup.Flow | NodeGroup.ExpressionWrapper,
};

type Expression =
  | JSXElement
  | JSXFragment
  | BindExpression
  | DoExpression
  | RecordExpression
  | TupleExpression
  | DecimalLiteral
  | ModuleExpression
  | TopicReference
  | PipelineTopicExpression
  | PipelineBareFunction
  | PipelinePrimaryTopicReference
  | TSInstantiationExpression
  | TSAsExpression
  | TSSatisfiesExpression
  | TSTypeAssertion
  | TSNonNullExpression;
type Scopable = TSModuleBlock;
type BlockParent = TSModuleBlock;
type Block = TSModuleBlock;
type Statement =
  | DeclareClass
  | DeclareFunction
  | DeclareInterface
  | DeclareModule
  | DeclareModuleExports
  | DeclareTypeAlias
  | DeclareOpaqueType
  | DeclareVariable
  | DeclareExportDeclaration
  | DeclareExportAllDeclaration
  | InterfaceDeclaration
  | OpaqueType
  | TypeAlias
  | EnumDeclaration
  | TSDeclareFunction
  | TSInterfaceDeclaration
  | TSTypeAliasDeclaration
  | TSEnumDeclaration
  | TSModuleDeclaration
  | TSImportEqualsDeclaration
  | TSExportAssignment
  | TSNamespaceExportDeclaration;
type FunctionParent = TSModuleBlock;
type Pureish = DecimalLiteral;
type Declaration =
  | DeclareClass
  | DeclareFunction
  | DeclareInterface
  | DeclareModule
  | DeclareModuleExports
  | DeclareTypeAlias
  | DeclareOpaqueType
  | DeclareVariable
  | DeclareExportDeclaration
  | DeclareExportAllDeclaration
  | InterfaceDeclaration
  | OpaqueType
  | TypeAlias
  | EnumDeclaration
  | TSDeclareFunction
  | TSInterfaceDeclaration
  | TSTypeAliasDeclaration
  | TSEnumDeclaration
  | TSModuleDeclaration;
type PatternLike =
  | TSAsExpression
  | TSSatisfiesExpression
  | TSTypeAssertion
  | TSNonNullExpression;
type LVal =
  | TSParameterProperty
  | TSAsExpression
  | TSSatisfiesExpression
  | TSTypeAssertion
  | TSNonNullExpression;
type TSEntityName = TSQualifiedName;
type Literal = TemplateLiteral | DecimalLiteral;
type Immutable =
  | JSXAttribute
  | JSXClosingElement
  | JSXElement
  | JSXExpressionContainer
  | JSXSpreadChild
  | JSXOpeningElement
  | JSXText
  | JSXFragment
  | JSXOpeningFragment
  | JSXClosingFragment
  | DecimalLiteral;
type UserWhitespacable =
  | ObjectTypeInternalSlot
  | ObjectTypeCallProperty
  | ObjectTypeIndexer
  | ObjectTypeProperty
  | ObjectTypeSpreadProperty;
type ModuleSpecifier = ExportNamespaceSpecifier | ExportDefaultSpecifier;
type Flow =
  | AnyTypeAnnotation
  | ArrayTypeAnnotation
  | BooleanTypeAnnotation
  | BooleanLiteralTypeAnnotation
  | NullLiteralTypeAnnotation
  | ClassImplements
  | DeclareClass
  | DeclareFunction
  | DeclareInterface
  | DeclareModule
  | DeclareModuleExports
  | DeclareTypeAlias
  | DeclareOpaqueType
  | DeclareVariable
  | DeclareExportDeclaration
  | DeclareExportAllDeclaration
  | DeclaredPredicate
  | ExistsTypeAnnotation
  | FunctionTypeAnnotation
  | FunctionTypeParam
  | GenericTypeAnnotation
  | InferredPredicate
  | InterfaceExtends
  | InterfaceDeclaration
  | InterfaceTypeAnnotation
  | IntersectionTypeAnnotation
  | MixedTypeAnnotation
  | EmptyTypeAnnotation
  | NullableTypeAnnotation
  | NumberLiteralTypeAnnotation
  | NumberTypeAnnotation
  | ObjectTypeAnnotation
  | ObjectTypeInternalSlot
  | ObjectTypeCallProperty
  | ObjectTypeIndexer
  | ObjectTypeProperty
  | ObjectTypeSpreadProperty
  | OpaqueType
  | QualifiedTypeIdentifier
  | StringLiteralTypeAnnotation
  | StringTypeAnnotation
  | SymbolTypeAnnotation
  | ThisTypeAnnotation
  | TupleTypeAnnotation
  | TypeofTypeAnnotation
  | TypeAlias
  | TypeAnnotation
  | TypeParameter
  | TypeParameterDeclaration
  | TypeParameterInstantiation
  | UnionTypeAnnotation
  | Variance
  | VoidTypeAnnotation
  | EnumDeclaration
  | EnumBooleanBody
  | EnumNumberBody
  | EnumStringBody
  | EnumSymbolBody
  | EnumBooleanMember
  | EnumNumberMember
  | EnumStringMember
  | EnumDefaultedMember
  | IndexedAccessType
  | OptionalIndexedAccessType;
type FlowType =
  | AnyTypeAnnotation
  | ArrayTypeAnnotation
  | BooleanTypeAnnotation
  | BooleanLiteralTypeAnnotation
  | NullLiteralTypeAnnotation
  | ExistsTypeAnnotation
  | FunctionTypeAnnotation
  | GenericTypeAnnotation
  | InterfaceTypeAnnotation
  | IntersectionTypeAnnotation
  | MixedTypeAnnotation
  | EmptyTypeAnnotation
  | NullableTypeAnnotation
  | NumberLiteralTypeAnnotation
  | NumberTypeAnnotation
  | ObjectTypeAnnotation
  | StringLiteralTypeAnnotation
  | StringTypeAnnotation
  | SymbolTypeAnnotation
  | ThisTypeAnnotation
  | TupleTypeAnnotation
  | TypeofTypeAnnotation
  | UnionTypeAnnotation
  | VoidTypeAnnotation
  | IndexedAccessType
  | OptionalIndexedAccessType;
type FlowBaseAnnotation =
  | AnyTypeAnnotation
  | BooleanTypeAnnotation
  | NullLiteralTypeAnnotation
  | MixedTypeAnnotation
  | EmptyTypeAnnotation
  | NumberTypeAnnotation
  | StringTypeAnnotation
  | SymbolTypeAnnotation
  | ThisTypeAnnotation
  | VoidTypeAnnotation;
type FlowDeclaration =
  | DeclareClass
  | DeclareFunction
  | DeclareInterface
  | DeclareModule
  | DeclareModuleExports
  | DeclareTypeAlias
  | DeclareOpaqueType
  | DeclareVariable
  | DeclareExportDeclaration
  | DeclareExportAllDeclaration
  | InterfaceDeclaration
  | OpaqueType
  | TypeAlias;
type FlowPredicate = DeclaredPredicate | InferredPredicate;
type EnumBody =
  | EnumBooleanBody
  | EnumNumberBody
  | EnumStringBody
  | EnumSymbolBody;
type EnumMember =
  | EnumBooleanMember
  | EnumNumberMember
  | EnumStringMember
  | EnumDefaultedMember;
type JSX =
  | JSXAttribute
  | JSXClosingElement
  | JSXElement
  | JSXEmptyExpression
  | JSXExpressionContainer
  | JSXSpreadChild
  | JSXIdentifier
  | JSXMemberExpression
  | JSXNamespacedName
  | JSXOpeningElement
  | JSXSpreadAttribute
  | JSXText
  | JSXFragment
  | JSXOpeningFragment
  | JSXClosingFragment;
type Miscellaneous = Noop | Placeholder | V8IntrinsicIdentifier;
type TypeScript =
  | TSParameterProperty
  | TSDeclareFunction
  | TSDeclareMethod
  | TSQualifiedName
  | TSCallSignatureDeclaration
  | TSConstructSignatureDeclaration
  | TSPropertySignature
  | TSMethodSignature
  | TSIndexSignature
  | TSAnyKeyword
  | TSBooleanKeyword
  | TSBigIntKeyword
  | TSIntrinsicKeyword
  | TSNeverKeyword
  | TSNullKeyword
  | TSNumberKeyword
  | TSObjectKeyword
  | TSStringKeyword
  | TSSymbolKeyword
  | TSUndefinedKeyword
  | TSUnknownKeyword
  | TSVoidKeyword
  | TSThisType
  | TSFunctionType
  | TSConstructorType
  | TSTypeReference
  | TSTypePredicate
  | TSTypeQuery
  | TSTypeLiteral
  | TSArrayType
  | TSTupleType
  | TSOptionalType
  | TSRestType
  | TSNamedTupleMember
  | TSUnionType
  | TSIntersectionType
  | TSConditionalType
  | TSInferType
  | TSParenthesizedType
  | TSTypeOperator
  | TSIndexedAccessType
  | TSMappedType
  | TSLiteralType
  | TSExpressionWithTypeArguments
  | TSInterfaceDeclaration
  | TSInterfaceBody
  | TSTypeAliasDeclaration
  | TSInstantiationExpression
  | TSAsExpression
  | TSSatisfiesExpression
  | TSTypeAssertion
  | TSEnumDeclaration
  | TSEnumMember
  | TSModuleDeclaration
  | TSModuleBlock
  | TSImportType
  | TSImportEqualsDeclaration
  | TSExternalModuleReference
  | TSNonNullExpression
  | TSExportAssignment
  | TSNamespaceExportDeclaration
  | TSTypeAnnotation
  | TSTypeParameterInstantiation
  | TSTypeParameterDeclaration
  | TSTypeParameter;
type TSTypeElement =
  | TSCallSignatureDeclaration
  | TSConstructSignatureDeclaration
  | TSPropertySignature
  | TSMethodSignature
  | TSIndexSignature;
type TSType =
  | TSAnyKeyword
  | TSBooleanKeyword
  | TSBigIntKeyword
  | TSIntrinsicKeyword
  | TSNeverKeyword
  | TSNullKeyword
  | TSNumberKeyword
  | TSObjectKeyword
  | TSStringKeyword
  | TSSymbolKeyword
  | TSUndefinedKeyword
  | TSUnknownKeyword
  | TSVoidKeyword
  | TSThisType
  | TSFunctionType
  | TSConstructorType
  | TSTypeReference
  | TSTypePredicate
  | TSTypeQuery
  | TSTypeLiteral
  | TSArrayType
  | TSTupleType
  | TSOptionalType
  | TSRestType
  | TSUnionType
  | TSIntersectionType
  | TSConditionalType
  | TSInferType
  | TSParenthesizedType
  | TSTypeOperator
  | TSIndexedAccessType
  | TSMappedType
  | TSLiteralType
  | TSExpressionWithTypeArguments
  | TSImportType;
type TSBaseType =
  | TSAnyKeyword
  | TSBooleanKeyword
  | TSBigIntKeyword
  | TSIntrinsicKeyword
  | TSNeverKeyword
  | TSNullKeyword
  | TSNumberKeyword
  | TSObjectKeyword
  | TSStringKeyword
  | TSSymbolKeyword
  | TSUndefinedKeyword
  | TSUnknownKeyword
  | TSVoidKeyword
  | TSThisType
  | TSLiteralType;
