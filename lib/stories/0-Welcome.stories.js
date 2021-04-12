"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToStorybook = void 0;
var React = require("react");
var addon_links_1 = require("@storybook/addon-links");
var demo_1 = require("@storybook/react/demo");
exports.default = {
    title: 'Welcome',
    component: demo_1.Welcome,
};
var ToStorybook = function () { return React.createElement(demo_1.Welcome, { showApp: addon_links_1.linkTo('Button') }); };
exports.ToStorybook = ToStorybook;
exports.ToStorybook.story = {
    name: 'to Storybook',
};
//# sourceMappingURL=0-Welcome.stories.js.map