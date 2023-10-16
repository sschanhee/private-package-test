"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayHelloWorld = exports.sayByeWorld = void 0;
var bye_world_1 = require("./bye-world");
Object.defineProperty(exports, "sayByeWorld", { enumerable: true, get: function () { return bye_world_1.sayByeWorld; } });
var hello_world_1 = require("./hello-world");
Object.defineProperty(exports, "sayHelloWorld", { enumerable: true, get: function () { return hello_world_1.sayHelloWorld; } });
__exportStar(require("./math"), exports);
