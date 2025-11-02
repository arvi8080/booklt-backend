"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateName = exports.validatePhone = exports.validateEmail = void 0;
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
exports.validateEmail = validateEmail;
const validatePhone = (phone) => {
    const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
};
exports.validatePhone = validatePhone;
const validateName = (name) => {
    return name.trim().length >= 2;
};
exports.validateName = validateName;
//# sourceMappingURL=validators.js.map