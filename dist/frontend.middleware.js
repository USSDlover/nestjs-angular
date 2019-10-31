"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const common_1 = require("@nestjs/common");
const routes_1 = require("./routes");
const allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
];
const resolvePath = (file) => path.resolve(`./public/${file}`);
let FrontendMiddleware = class FrontendMiddleware {
    async use(req, res, next) {
        const ob = req;
        const url = req.baseUrl;
        if (url.indexOf(routes_1.ROUTE_PREFIX) === 1) {
            next();
        }
        else if (allowedExt.filter(ext => url.indexOf(ext) > 0).length > 0) {
            res.sendFile(resolvePath(url));
        }
        else {
            res.sendFile(resolvePath('index.html'));
        }
    }
};
FrontendMiddleware = __decorate([
    common_1.Injectable()
], FrontendMiddleware);
exports.FrontendMiddleware = FrontendMiddleware;
//# sourceMappingURL=frontend.middleware.js.map
