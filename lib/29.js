(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/less/less.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\nvar conf = {\n    wordPattern: /(#?-?\\d*\\.\\d\\w*%?)|([@#!.:]?[\\w-?]+%?)|[@#!.]/g,\n    comments: {\n        blockComment: ['/*', '*/'],\n        lineComment: '//'\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}', notIn: ['string', 'comment'] },\n        { open: '[', close: ']', notIn: ['string', 'comment'] },\n        { open: '(', close: ')', notIn: ['string', 'comment'] },\n        { open: '\"', close: '\"', notIn: ['string', 'comment'] },\n        { open: \"'\", close: \"'\", notIn: ['string', 'comment'] }\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: \"'\", close: \"'\" }\n    ],\n    folding: {\n        markers: {\n            start: new RegExp('^\\\\s*\\\\/\\\\*\\\\s*#region\\\\b\\\\s*(.*?)\\\\s*\\\\*\\\\/'),\n            end: new RegExp('^\\\\s*\\\\/\\\\*\\\\s*#endregion\\\\b.*\\\\*\\\\/')\n        }\n    }\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.less',\n    identifier: '-?-?([a-zA-Z]|(\\\\\\\\(([0-9a-fA-F]{1,6}\\\\s?)|[^[0-9a-fA-F])))([\\\\w\\\\-]|(\\\\\\\\(([0-9a-fA-F]{1,6}\\\\s?)|[^[0-9a-fA-F])))*',\n    identifierPlus: '-?-?([a-zA-Z:.]|(\\\\\\\\(([0-9a-fA-F]{1,6}\\\\s?)|[^[0-9a-fA-F])))([\\\\w\\\\-:.]|(\\\\\\\\(([0-9a-fA-F]{1,6}\\\\s?)|[^[0-9a-fA-F])))*',\n    brackets: [\n        { open: '{', close: '}', token: 'delimiter.curly' },\n        { open: '[', close: ']', token: 'delimiter.bracket' },\n        { open: '(', close: ')', token: 'delimiter.parenthesis' },\n        { open: '<', close: '>', token: 'delimiter.angle' }\n    ],\n    tokenizer: {\n        root: [\n            { include: '@nestedJSBegin' },\n            ['[ \\\\t\\\\r\\\\n]+', ''],\n            { include: '@comments' },\n            { include: '@keyword' },\n            { include: '@strings' },\n            { include: '@numbers' },\n            ['[*_]?[a-zA-Z\\\\-\\\\s]+(?=:.*(;|(\\\\\\\\$)))', 'attribute.name', '@attribute'],\n            ['url(\\\\-prefix)?\\\\(', { token: 'tag', next: '@urldeclaration' }],\n            ['[{}()\\\\[\\\\]]', '@brackets'],\n            ['[,:;]', 'delimiter'],\n            ['#@identifierPlus', 'tag.id'],\n            ['&', 'tag'],\n            ['\\\\.@identifierPlus(?=\\\\()', 'tag.class', '@attribute'],\n            ['\\\\.@identifierPlus', 'tag.class'],\n            ['@identifierPlus', 'tag'],\n            { include: '@operators' },\n            ['@(@identifier(?=[:,\\\\)]))', 'variable', '@attribute'],\n            ['@(@identifier)', 'variable'],\n            ['@', 'key', '@atRules']\n        ],\n        nestedJSBegin: [\n            ['``', 'delimiter.backtick'],\n            [\n                '`',\n                {\n                    token: 'delimiter.backtick',\n                    next: '@nestedJSEnd',\n                    nextEmbedded: 'text/javascript'\n                }\n            ]\n        ],\n        nestedJSEnd: [\n            [\n                '`',\n                {\n                    token: 'delimiter.backtick',\n                    next: '@pop',\n                    nextEmbedded: '@pop'\n                }\n            ]\n        ],\n        operators: [['[<>=\\\\+\\\\-\\\\*\\\\/\\\\^\\\\|\\\\~]', 'operator']],\n        keyword: [\n            [\n                '(@[\\\\s]*import|![\\\\s]*important|true|false|when|iscolor|isnumber|isstring|iskeyword|isurl|ispixel|ispercentage|isem|hue|saturation|lightness|alpha|lighten|darken|saturate|desaturate|fadein|fadeout|fade|spin|mix|round|ceil|floor|percentage)\\\\b',\n                'keyword'\n            ]\n        ],\n        urldeclaration: [\n            { include: '@strings' },\n            ['[^)\\r\\n]+', 'string'],\n            ['\\\\)', { token: 'tag', next: '@pop' }]\n        ],\n        attribute: [\n            { include: '@nestedJSBegin' },\n            { include: '@comments' },\n            { include: '@strings' },\n            { include: '@numbers' },\n            { include: '@keyword' },\n            ['[a-zA-Z\\\\-]+(?=\\\\()', 'attribute.value', '@attribute'],\n            ['>', 'operator', '@pop'],\n            ['@identifier', 'attribute.value'],\n            { include: '@operators' },\n            ['@(@identifier)', 'variable'],\n            ['[)\\\\}]', '@brackets', '@pop'],\n            ['[{}()\\\\[\\\\]>]', '@brackets'],\n            ['[;]', 'delimiter', '@pop'],\n            ['[,=:]', 'delimiter'],\n            ['\\\\s', ''],\n            ['.', 'attribute.value']\n        ],\n        comments: [\n            ['\\\\/\\\\*', 'comment', '@comment'],\n            ['\\\\/\\\\/+.*', 'comment']\n        ],\n        comment: [\n            ['\\\\*\\\\/', 'comment', '@pop'],\n            ['.', 'comment']\n        ],\n        numbers: [\n            [\n                '(\\\\d*\\\\.)?\\\\d+([eE][\\\\-+]?\\\\d+)?',\n                { token: 'attribute.value.number', next: '@units' }\n            ],\n            ['#[0-9a-fA-F_]+(?!\\\\w)', 'attribute.value.hex']\n        ],\n        units: [\n            [\n                '(em|ex|ch|rem|vmin|vmax|vw|vh|vm|cm|mm|in|px|pt|pc|deg|grad|rad|turn|s|ms|Hz|kHz|%)?',\n                'attribute.value.unit',\n                '@pop'\n            ]\n        ],\n        strings: [\n            ['~?\"', { token: 'string.delimiter', next: '@stringsEndDoubleQuote' }],\n            [\"~?'\", { token: 'string.delimiter', next: '@stringsEndQuote' }]\n        ],\n        stringsEndDoubleQuote: [\n            ['\\\\\\\\\"', 'string'],\n            ['\"', { token: 'string.delimiter', next: '@popall' }],\n            ['.', 'string']\n        ],\n        stringsEndQuote: [\n            [\"\\\\\\\\'\", 'string'],\n            [\"'\", { token: 'string.delimiter', next: '@popall' }],\n            ['.', 'string']\n        ],\n        atRules: [\n            { include: '@comments' },\n            { include: '@strings' },\n            ['[()]', 'delimiter'],\n            ['[\\\\{;]', 'delimiter', '@pop'],\n            ['.', 'key']\n        ]\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2xlc3MvbGVzcy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvbGVzcy9sZXNzLmpzPzM5ZjEiXSwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgd29yZFBhdHRlcm46IC8oIz8tP1xcZCpcXC5cXGRcXHcqJT8pfChbQCMhLjpdP1tcXHctP10rJT8pfFtAIyEuXS9nLFxuICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGJsb2NrQ29tbWVudDogWycvKicsICcqLyddLFxuICAgICAgICBsaW5lQ29tbWVudDogJy8vJ1xuICAgIH0sXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgWyd7JywgJ30nXSxcbiAgICAgICAgWydbJywgJ10nXSxcbiAgICAgICAgWycoJywgJyknXVxuICAgIF0sXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9Jywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiwgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9XG4gICAgXSxcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH1cbiAgICBdLFxuICAgIGZvbGRpbmc6IHtcbiAgICAgICAgbWFya2Vyczoge1xuICAgICAgICAgICAgc3RhcnQ6IG5ldyBSZWdFeHAoJ15cXFxccypcXFxcL1xcXFwqXFxcXHMqI3JlZ2lvblxcXFxiXFxcXHMqKC4qPylcXFxccypcXFxcKlxcXFwvJyksXG4gICAgICAgICAgICBlbmQ6IG5ldyBSZWdFeHAoJ15cXFxccypcXFxcL1xcXFwqXFxcXHMqI2VuZHJlZ2lvblxcXFxiLipcXFxcKlxcXFwvJylcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIGRlZmF1bHRUb2tlbjogJycsXG4gICAgdG9rZW5Qb3N0Zml4OiAnLmxlc3MnLFxuICAgIGlkZW50aWZpZXI6ICctPy0/KFthLXpBLVpdfChcXFxcXFxcXCgoWzAtOWEtZkEtRl17MSw2fVxcXFxzPyl8W15bMC05YS1mQS1GXSkpKShbXFxcXHdcXFxcLV18KFxcXFxcXFxcKChbMC05YS1mQS1GXXsxLDZ9XFxcXHM/KXxbXlswLTlhLWZBLUZdKSkpKicsXG4gICAgaWRlbnRpZmllclBsdXM6ICctPy0/KFthLXpBLVo6Ll18KFxcXFxcXFxcKChbMC05YS1mQS1GXXsxLDZ9XFxcXHM/KXxbXlswLTlhLWZBLUZdKSkpKFtcXFxcd1xcXFwtOi5dfChcXFxcXFxcXCgoWzAtOWEtZkEtRl17MSw2fVxcXFxzPyl8W15bMC05YS1mQS1GXSkpKSonLFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCB0b2tlbjogJ2RlbGltaXRlci5jdXJseScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScsIHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknLCB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfSxcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicsIHRva2VuOiAnZGVsaW1pdGVyLmFuZ2xlJyB9XG4gICAgXSxcbiAgICB0b2tlbml6ZXI6IHtcbiAgICAgICAgcm9vdDogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQG5lc3RlZEpTQmVnaW4nIH0sXG4gICAgICAgICAgICBbJ1sgXFxcXHRcXFxcclxcXFxuXSsnLCAnJ10sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29tbWVudHMnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAa2V5d29yZCcgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzdHJpbmdzJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQG51bWJlcnMnIH0sXG4gICAgICAgICAgICBbJ1sqX10/W2EtekEtWlxcXFwtXFxcXHNdKyg/PTouKig7fChcXFxcXFxcXCQpKSknLCAnYXR0cmlidXRlLm5hbWUnLCAnQGF0dHJpYnV0ZSddLFxuICAgICAgICAgICAgWyd1cmwoXFxcXC1wcmVmaXgpP1xcXFwoJywgeyB0b2tlbjogJ3RhZycsIG5leHQ6ICdAdXJsZGVjbGFyYXRpb24nIH1dLFxuICAgICAgICAgICAgWydbe30oKVxcXFxbXFxcXF1dJywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgWydbLDo7XScsICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFsnI0BpZGVudGlmaWVyUGx1cycsICd0YWcuaWQnXSxcbiAgICAgICAgICAgIFsnJicsICd0YWcnXSxcbiAgICAgICAgICAgIFsnXFxcXC5AaWRlbnRpZmllclBsdXMoPz1cXFxcKCknLCAndGFnLmNsYXNzJywgJ0BhdHRyaWJ1dGUnXSxcbiAgICAgICAgICAgIFsnXFxcXC5AaWRlbnRpZmllclBsdXMnLCAndGFnLmNsYXNzJ10sXG4gICAgICAgICAgICBbJ0BpZGVudGlmaWVyUGx1cycsICd0YWcnXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BvcGVyYXRvcnMnIH0sXG4gICAgICAgICAgICBbJ0AoQGlkZW50aWZpZXIoPz1bOixcXFxcKV0pKScsICd2YXJpYWJsZScsICdAYXR0cmlidXRlJ10sXG4gICAgICAgICAgICBbJ0AoQGlkZW50aWZpZXIpJywgJ3ZhcmlhYmxlJ10sXG4gICAgICAgICAgICBbJ0AnLCAna2V5JywgJ0BhdFJ1bGVzJ11cbiAgICAgICAgXSxcbiAgICAgICAgbmVzdGVkSlNCZWdpbjogW1xuICAgICAgICAgICAgWydgYCcsICdkZWxpbWl0ZXIuYmFja3RpY2snXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAnYCcsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2RlbGltaXRlci5iYWNrdGljaycsXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAbmVzdGVkSlNFbmQnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2phdmFzY3JpcHQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICBuZXN0ZWRKU0VuZDogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICdgJyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnZGVsaW1pdGVyLmJhY2t0aWNrJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0Bwb3AnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICdAcG9wJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgb3BlcmF0b3JzOiBbWydbPD49XFxcXCtcXFxcLVxcXFwqXFxcXC9cXFxcXlxcXFx8XFxcXH5dJywgJ29wZXJhdG9yJ11dLFxuICAgICAgICBrZXl3b3JkOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgJyhAW1xcXFxzXSppbXBvcnR8IVtcXFxcc10qaW1wb3J0YW50fHRydWV8ZmFsc2V8d2hlbnxpc2NvbG9yfGlzbnVtYmVyfGlzc3RyaW5nfGlza2V5d29yZHxpc3VybHxpc3BpeGVsfGlzcGVyY2VudGFnZXxpc2VtfGh1ZXxzYXR1cmF0aW9ufGxpZ2h0bmVzc3xhbHBoYXxsaWdodGVufGRhcmtlbnxzYXR1cmF0ZXxkZXNhdHVyYXRlfGZhZGVpbnxmYWRlb3V0fGZhZGV8c3BpbnxtaXh8cm91bmR8Y2VpbHxmbG9vcnxwZXJjZW50YWdlKVxcXFxiJyxcbiAgICAgICAgICAgICAgICAna2V5d29yZCdcbiAgICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgdXJsZGVjbGFyYXRpb246IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzdHJpbmdzJyB9LFxuICAgICAgICAgICAgWydbXilcXHJcXG5dKycsICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsnXFxcXCknLCB7IHRva2VuOiAndGFnJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIGF0dHJpYnV0ZTogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQG5lc3RlZEpTQmVnaW4nIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29tbWVudHMnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc3RyaW5ncycgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BudW1iZXJzJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGtleXdvcmQnIH0sXG4gICAgICAgICAgICBbJ1thLXpBLVpcXFxcLV0rKD89XFxcXCgpJywgJ2F0dHJpYnV0ZS52YWx1ZScsICdAYXR0cmlidXRlJ10sXG4gICAgICAgICAgICBbJz4nLCAnb3BlcmF0b3InLCAnQHBvcCddLFxuICAgICAgICAgICAgWydAaWRlbnRpZmllcicsICdhdHRyaWJ1dGUudmFsdWUnXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BvcGVyYXRvcnMnIH0sXG4gICAgICAgICAgICBbJ0AoQGlkZW50aWZpZXIpJywgJ3ZhcmlhYmxlJ10sXG4gICAgICAgICAgICBbJ1spXFxcXH1dJywgJ0BicmFja2V0cycsICdAcG9wJ10sXG4gICAgICAgICAgICBbJ1t7fSgpXFxcXFtcXFxcXT5dJywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgWydbO10nLCAnZGVsaW1pdGVyJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsnWyw9Ol0nLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbJ1xcXFxzJywgJyddLFxuICAgICAgICAgICAgWycuJywgJ2F0dHJpYnV0ZS52YWx1ZSddXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnRzOiBbXG4gICAgICAgICAgICBbJ1xcXFwvXFxcXConLCAnY29tbWVudCcsICdAY29tbWVudCddLFxuICAgICAgICAgICAgWydcXFxcL1xcXFwvKy4qJywgJ2NvbW1lbnQnXVxuICAgICAgICBdLFxuICAgICAgICBjb21tZW50OiBbXG4gICAgICAgICAgICBbJ1xcXFwqXFxcXC8nLCAnY29tbWVudCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbJy4nLCAnY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIG51bWJlcnM6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAnKFxcXFxkKlxcXFwuKT9cXFxcZCsoW2VFXVtcXFxcLStdP1xcXFxkKyk/JyxcbiAgICAgICAgICAgICAgICB7IHRva2VuOiAnYXR0cmlidXRlLnZhbHVlLm51bWJlcicsIG5leHQ6ICdAdW5pdHMnIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbJyNbMC05YS1mQS1GX10rKD8hXFxcXHcpJywgJ2F0dHJpYnV0ZS52YWx1ZS5oZXgnXVxuICAgICAgICBdLFxuICAgICAgICB1bml0czogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICcoZW18ZXh8Y2h8cmVtfHZtaW58dm1heHx2d3x2aHx2bXxjbXxtbXxpbnxweHxwdHxwY3xkZWd8Z3JhZHxyYWR8dHVybnxzfG1zfEh6fGtIenwlKT8nLFxuICAgICAgICAgICAgICAgICdhdHRyaWJ1dGUudmFsdWUudW5pdCcsXG4gICAgICAgICAgICAgICAgJ0Bwb3AnXG4gICAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZ3M6IFtcbiAgICAgICAgICAgIFsnfj9cIicsIHsgdG9rZW46ICdzdHJpbmcuZGVsaW1pdGVyJywgbmV4dDogJ0BzdHJpbmdzRW5kRG91YmxlUXVvdGUnIH1dLFxuICAgICAgICAgICAgW1wifj8nXCIsIHsgdG9rZW46ICdzdHJpbmcuZGVsaW1pdGVyJywgbmV4dDogJ0BzdHJpbmdzRW5kUXVvdGUnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZ3NFbmREb3VibGVRdW90ZTogW1xuICAgICAgICAgICAgWydcXFxcXFxcXFwiJywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWydcIicsIHsgdG9rZW46ICdzdHJpbmcuZGVsaW1pdGVyJywgbmV4dDogJ0Bwb3BhbGwnIH1dLFxuICAgICAgICAgICAgWycuJywgJ3N0cmluZyddXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZ3NFbmRRdW90ZTogW1xuICAgICAgICAgICAgW1wiXFxcXFxcXFwnXCIsICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFtcIidcIiwgeyB0b2tlbjogJ3N0cmluZy5kZWxpbWl0ZXInLCBuZXh0OiAnQHBvcGFsbCcgfV0sXG4gICAgICAgICAgICBbJy4nLCAnc3RyaW5nJ11cbiAgICAgICAgXSxcbiAgICAgICAgYXRSdWxlczogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGNvbW1lbnRzJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHN0cmluZ3MnIH0sXG4gICAgICAgICAgICBbJ1soKV0nLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbJ1tcXFxceztdJywgJ2RlbGltaXRlcicsICdAcG9wJ10sXG4gICAgICAgICAgICBbJy4nLCAna2V5J11cbiAgICAgICAgXVxuICAgIH1cbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/monaco-editor/esm/vs/basic-languages/less/less.js\n");

/***/ })

}]);