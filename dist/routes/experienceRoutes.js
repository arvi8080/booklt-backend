"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const experienceController_1 = require("../controllers/experienceController");
const router = express_1.default.Router();
router.get('/', experienceController_1.getExperiences);
router.get('/:id', experienceController_1.getExperienceById);
exports.default = router;
//# sourceMappingURL=experienceRoutes.js.map