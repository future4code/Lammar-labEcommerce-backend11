"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const createCharacters_1 = __importDefault(require("./endopoints/createCharacters"));
const deleteCharacter_1 = __importDefault(require("./endopoints/deleteCharacter"));
const getAllCharacters_1 = __importDefault(require("./endopoints/getAllCharacters"));
app_1.default.get("/character", getAllCharacters_1.default);
app_1.default.put("/character", createCharacters_1.default);
app_1.default.delete("/character/:id", deleteCharacter_1.default);
