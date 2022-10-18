"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 5000;
app.get('/user', (req, res) => {
    let result = { id: 1, name: 'user1' };
    res.status(200).json(result);
});
app.listen(port, () => {
    console.log(`app is listening on port at http://localhost:${port}`);
});
