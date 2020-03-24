import Promise from "bluebird";
import { execute } from "./localize";
const FOLDERS = ["PushTheButtonDrawingTests", "PushTheButtonMoralityTests", "PushTheButtonRatingTests", "PushTheButtonWritingTests"]

Promise.map(FOLDERS, execute, {concurrency: 4})
