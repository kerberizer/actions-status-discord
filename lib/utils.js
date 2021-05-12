"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stob = exports.logWarning = exports.logInfo = exports.logDebug = exports.logError = void 0;
const core = __importStar(require("@actions/core"));
const NOFAIL = core.getInput('nofail').trim().toLowerCase() === 'true';
function logError(msg) {
    NOFAIL ? core.error(msg) : core.setFailed(msg);
}
exports.logError = logError;
function logDebug(msg) {
    core.debug(msg);
}
exports.logDebug = logDebug;
function logInfo(msg) {
    core.info(msg);
}
exports.logInfo = logInfo;
function logWarning(msg) {
    core.warning(msg);
}
exports.logWarning = logWarning;
function stob(s) {
    return s.trim().toLowerCase() === 'true';
}
exports.stob = stob;
