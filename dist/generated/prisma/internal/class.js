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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.6.0",
    "engineVersion": "75cbdc1eb7150937890ad5465d861175c6624711",
    "activeProvider": "postgresql",
    "inlineSchema": "generator client {\n  provider = \"prisma-client\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel License {\n  id              String       @id @default(uuid())\n  key             String       @unique\n  email           String\n  name            String?\n  phone           String?\n  country         String?\n  stripeSessionId String?      @unique\n  maxMachines     Int          @default(2)\n  active          Boolean      @default(true)\n  createdAt       DateTime     @default(now())\n  activations     Activation[]\n\n  @@map(\"licenses\")\n}\n\nmodel Activation {\n  id          String   @id @default(uuid())\n  licenseId   String\n  machineId   String\n  activatedAt DateTime @default(now())\n  lastSeen    DateTime @default(now())\n\n  license License @relation(fields: [licenseId], references: [id], onDelete: Cascade)\n\n  @@unique([licenseId, machineId])\n  @@map(\"activations\")\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"License\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"key\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"phone\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"country\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"stripeSessionId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"maxMachines\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"active\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"activations\",\"kind\":\"object\",\"type\":\"Activation\",\"relationName\":\"ActivationToLicense\"}],\"dbName\":\"licenses\"},\"Activation\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"licenseId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"machineId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"activatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastSeen\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"license\",\"kind\":\"object\",\"type\":\"License\",\"relationName\":\"ActivationToLicense\"}],\"dbName\":\"activations\"}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"orderBy\",\"cursor\",\"license\",\"activations\",\"_count\",\"License.findUnique\",\"License.findUniqueOrThrow\",\"License.findFirst\",\"License.findFirstOrThrow\",\"License.findMany\",\"data\",\"License.createOne\",\"License.createMany\",\"License.createManyAndReturn\",\"License.updateOne\",\"License.updateMany\",\"License.updateManyAndReturn\",\"create\",\"update\",\"License.upsertOne\",\"License.deleteOne\",\"License.deleteMany\",\"having\",\"_avg\",\"_sum\",\"_min\",\"_max\",\"License.groupBy\",\"License.aggregate\",\"Activation.findUnique\",\"Activation.findUniqueOrThrow\",\"Activation.findFirst\",\"Activation.findFirstOrThrow\",\"Activation.findMany\",\"Activation.createOne\",\"Activation.createMany\",\"Activation.createManyAndReturn\",\"Activation.updateOne\",\"Activation.updateMany\",\"Activation.updateManyAndReturn\",\"Activation.upsertOne\",\"Activation.deleteOne\",\"Activation.deleteMany\",\"Activation.groupBy\",\"Activation.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"licenseId\",\"machineId\",\"activatedAt\",\"lastSeen\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"key\",\"email\",\"name\",\"phone\",\"country\",\"stripeSessionId\",\"maxMachines\",\"active\",\"createdAt\",\"every\",\"some\",\"none\",\"licenseId_machineId\",\"is\",\"isNot\",\"connectOrCreate\",\"upsert\",\"createMany\",\"set\",\"disconnect\",\"delete\",\"connect\",\"updateMany\",\"deleteMany\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "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-AQAAAAE_AQAAAAFAAQAAAAELNgEAAAABNwEAAAAEOAEAAAAEOQEAAAABOgEAAAABOwEAAAABPAEAAAABPQEAPAAhPgEAAAABPwEAAAABQAEAAAABDS4AAD0AMC8AABwAEDAAAD0AMDEBADYAIUEBADYAIUIBADYAIUMBAD4AIUQBAD4AIUUBAD4AIUYBAD4AIUcCAD8AIUggAEAAIUlAADcAIQ4FAABGACAaAABHACAbAABHACA2AQAAAAE3AQAAAAU4AQAAAAU5AQAAAAE6AQAAAAE7AQAAAAE8AQAAAAE9AQBFACE-AQAAAAE_AQAAAAFAAQAAAAENBQAAOQAgGAAARAAgGQAAOQAgGgAAOQAgGwAAOQAgNgIAAAABNwIAAAAEOAIAAAAEOQIAAAABOgIAAAABOwIAAAABPAIAAAABPQIAQwAhBQUAADkAIBoAAEIAIBsAAEIAIDYgAAAAAT0gAEEAIQUFAAA5ACAaAABCACAbAABCACA2IAAAAAE9IABBACECNiAAAAABPSAAQgAhDQUAADkAIBgAAEQAIBkAADkAIBoAADkAIBsAADkAIDYCAAAAATcCAAAABDgCAAAABDkCAAAAAToCAAAAATsCAAAAATwCAAAAAT0CAEMAIQg2CAAAAAE3CAAAAAQ4CAAAAAQ5CAAAAAE6CAAAAAE7CAAAAAE8CAAAAAE9CABEACEOBQAARgAgGgAARwAgGwAARwAgNgEAAAABNwEAAAAFOAEAAAAFOQEAAAABOgEAAAABOwEAAAABPAEAAAABPQEARQAhPgEAAAABPwEAAAABQAEAAAABCDYCAAAAATcCAAAABTgCAAAABTkCAAAAAToCAAAAATsCAAAAATwCAAAAAT0CAEYAIQs2AQAAAAE3AQAAAAU4AQAAAAU5AQAAAAE6AQAAAAE7AQAAAAE8AQAAAAE9AQBHACE-AQAAAAE_AQAAAAFAAQAAAAEOBAAATgAgLgAASAAwLwAACQAQMAAASAAwMQEASQAhQQEASQAhQgEASQAhQwEASgAhRAEASgAhRQEASgAhRgEASgAhRwIASwAhSCAATAAhSUAATQAhCzYBAAAAATcBAAAABDgBAAAABDkBAAAAAToBAAAAATsBAAAAATwBAAAAAT0BADwAIT4BAAAAAT8BAAAAAUABAAAAAQs2AQAAAAE3AQAAAAU4AQAAAAU5AQAAAAE6AQAAAAE7AQAAAAE8AQAAAAE9AQBHACE-AQAAAAE_AQAAAAFAAQAAAAEINgIAAAABNwIAAAAEOAIAAAAEOQIAAAABOgIAAAABOwIAAAABPAIAAAABPQIAOQAhAjYgAAAAAT0gAEIAIQg2QAAAAAE3QAAAAAQ4QAAAAAQ5QAAAAAE6QAAAAAE7QAAAAAE8QAAAAAE9QAA6ACEDSgAAAwAgSwAAAwAgTAAAAwAgAjIBAAAAATMBAAAAAQkDAABRACAuAABQADAvAAADABAwAABQADAxAQBJACEyAQBJACEzAQBJACE0QABNACE1QABNACEQBAAATgAgLgAASAAwLwAACQAQMAAASAAwMQEASQAhQQEASQAhQgEASQAhQwEASgAhRAEASgAhRQEASgAhRgEASgAhRwIASwAhSCAATAAhSUAATQAhTgAACQAgTwAACQAgAAAAAVMBAAAAAQFTQAAAAAEFEgAAcwAgEwAAdgAgUAAAdAAgUQAAdQAgVgAAAQAgAxIAAHMAIFAAAHQAIFYAAAEAIAAAAAAAAAFTAQAAAAEFUwIAAAABWQIAAAABWgIAAAABWwIAAAABXAIAAAABAVMgAAAAAQsSAABjADATAABoADBQAABkADBRAABlADBSAABmACBTAABnADBUAABnADBVAABnADBWAABnADBXAABpADBYAABqADAEMQEAAAABMwEAAAABNEAAAAABNUAAAAABAgAAAAUAIBIAAG4AIAMAAAAFACASAABuACATAABtACABCwAAcgAwCgMAAFEAIC4AAFAAMC8AAAMAEDAAAFAAMDEBAAAAATIBAEkAITMBAEkAITRAAE0AITVAAE0AIU0AAE8AIAIAAAAFACALAABtACACAAAAawAgCwAAbAAgCC4AAGoAMC8AAGsAEDAAAGoAMDEBAEkAITIBAEkAITMBAEkAITRAAE0AITVAAE0AIQguAABqADAvAABrABAwAABqADAxAQBJACEyAQBJACEzAQBJACE0QABNACE1QABNACEEMQEAVQAhMwEAVQAhNEAAVgAhNUAAVgAhBDEBAFUAITMBAFUAITRAAFYAITVAAFYAIQQxAQAAAAEzAQAAAAE0QAAAAAE1QAAAAAEEEgAAYwAwUAAAZAAwUgAAZgAgVgAAZwAwAAUEAABwACBDAABZACBEAABZACBFAABZACBGAABZACAEMQEAAAABMwEAAAABNEAAAAABNUAAAAABCjEBAAAAAUEBAAAAAUIBAAAAAUMBAAAAAUQBAAAAAUUBAAAAAUYBAAAAAUcCAAAAAUggAAAAAUlAAAAAAQIAAAABACASAABzACADAAAACQAgEgAAcwAgEwAAdwAgDAAAAAkAIAsAAHcAIDEBAFUAIUEBAFUAIUIBAFUAIUMBAF8AIUQBAF8AIUUBAF8AIUYBAF8AIUcCAGAAIUggAGEAIUlAAFYAIQoxAQBVACFBAQBVACFCAQBVACFDAQBfACFEAQBfACFFAQBfACFGAQBfACFHAgBgACFIIABhACFJQABWACECBAYCBQADAQMAAQEEBwAAAAAFBQAIGAAJGQAKGgALGwAMAAAAAAAFBQAIGAAJGQAKGgALGwAMAQMAAQEDAAEDBQARGgASGwATAAAAAwUAERoAEhsAEwYCAQcIAQgLAQkMAQoNAQwPAQ0RBA4SBQ8UARAWBBEXBhQYARUZARYaBBwdBx0eDR4fAh8gAiAhAiEiAiIjAiMlAiQnBCUoDiYqAicsBCgtDykuAiovAiswBCwzEC00FA"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map