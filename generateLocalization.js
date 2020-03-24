import Promise from "bluebird";
import { processFolder } from "./localize";
const FOLDERS = ["PushTheButtonDrawingTests", "PushTheButtonMoralityTests", "PushTheButtonRatingTests", "PushTheButtonWritingTests"]

Promise.map(FOLDERS, processFolder, {concurrency: 4})
