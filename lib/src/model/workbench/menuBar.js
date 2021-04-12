"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuBarModel = exports.undoRedoMenu = exports.MENU_VIEW_STATUSBAR = exports.MENU_VIEW_ACTIVITYBAR = exports.MENU_VIEW_SIDEBAR = exports.MENU_VIEW_MENUBAR = exports.MENU_FILE_REDO = exports.MENU_FILE_UNDO = exports.MenuBarEvent = void 0;
var tsyringe_1 = require("tsyringe");
/**
 * The activity bar event definition
 */
var MenuBarEvent;
(function (MenuBarEvent) {
    /**
     * Selected an activity bar
     */
    MenuBarEvent["onClick"] = "menuBar.onClick";
})(MenuBarEvent = exports.MenuBarEvent || (exports.MenuBarEvent = {}));
exports.MENU_FILE_UNDO = 'undo';
exports.MENU_FILE_REDO = 'redo';
exports.MENU_VIEW_MENUBAR = 'workbench.action.showMenuBar';
exports.MENU_VIEW_SIDEBAR = 'workbench.action.showSideBar';
exports.MENU_VIEW_ACTIVITYBAR = 'workbench.action.showActivityBar';
exports.MENU_VIEW_STATUSBAR = 'workbench.action.showStatusBar';
var builtMenuData = [
    {
        id: 'File',
        name: 'File',
        data: [
            {
                id: 'New File',
                name: 'New File',
            },
            {
                id: 'OpenFile',
                name: 'Open',
            },
        ],
    },
    {
        id: 'Edit',
        name: 'Edit',
        data: [
            {
                id: exports.MENU_FILE_UNDO,
                name: 'Undo',
            },
            {
                id: exports.MENU_FILE_REDO,
                name: 'Redo',
            },
        ],
    },
    {
        id: 'Selection',
        name: 'Selection',
        data: [
            {
                id: 'SelectAll',
                name: 'Select All',
            },
            {
                id: 'CopyLineUp',
                name: 'Copy Line Up',
            },
        ],
    },
    {
        id: 'View',
        name: 'View',
        data: [
            {
                id: 'Command Palette',
                name: 'Command Palette',
            },
            {
                id: 'OpenView',
                name: 'Open View',
            },
            {
                id: 'Appearance',
                name: 'Appearance',
                data: [
                    {
                        icon: 'check',
                        id: exports.MENU_VIEW_MENUBAR,
                        name: 'Show Menu Bar',
                    },
                    {
                        icon: 'check',
                        id: exports.MENU_VIEW_SIDEBAR,
                        name: 'Show Side Bar',
                    },
                    {
                        icon: 'check',
                        id: exports.MENU_VIEW_STATUSBAR,
                        name: 'Show Status Bar',
                    },
                    {
                        icon: 'check',
                        id: exports.MENU_VIEW_ACTIVITYBAR,
                        name: 'Show Activity Bar',
                    },
                ],
            },
        ],
    },
    {
        id: 'Run',
        name: 'Run',
        data: [
            {
                id: 'RunTask',
                name: 'Run Task',
            },
        ],
    },
    {
        id: 'Help',
        name: 'Help',
        data: [
            {
                id: 'About',
                name: 'About',
            },
        ],
    },
];
exports.undoRedoMenu = [
    {
        id: exports.MENU_FILE_UNDO,
        label: 'Undo',
    },
    {
        id: exports.MENU_FILE_REDO,
        label: 'Redo',
    },
];
var MenuBarModel = /** @class */ (function () {
    function MenuBarModel(data, hidden) {
        if (data === void 0) { data = builtMenuData; }
        if (hidden === void 0) { hidden = false; }
        this.hidden = false;
        this.data = data;
        this.hidden = hidden;
    }
    MenuBarModel = __decorate([
        tsyringe_1.injectable(),
        __metadata("design:paramtypes", [Array, Object])
    ], MenuBarModel);
    return MenuBarModel;
}());
exports.MenuBarModel = MenuBarModel;
//# sourceMappingURL=menuBar.js.map