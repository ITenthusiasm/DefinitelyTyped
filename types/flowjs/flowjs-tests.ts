// flow object
let flowObject = new flowjs.Flow({});
let bool: boolean = flowObject.support;
bool = flowObject.supportDirectory;
let flowOpts: flowjs.FlowOptions = flowObject.opts;
let flowFileArray: flowjs.FlowFile[] = flowObject.files;
let flowChunkParams: flowjs.FlowChunkParams;

flowObject.assignBrowse([] as HTMLElement[]);
flowObject.assignBrowse([] as HTMLElement[], false, false, {});
flowObject.assignDrop([] as HTMLElement[]);
flowObject.unAssignDrop([] as HTMLElement[]);
flowObject.on("fileSuccess", (file: flowjs.FlowFile, serverMessage: string, chunk: flowjs.FlowChunk) => {});
flowObject.off("fileSuccess", () => {});
flowObject.upload();
flowObject.pause();
flowObject.resume();
flowObject.cancel();
flowObject.progress();
bool = flowObject.isUploading();
flowObject.addFile({} as any as File);
flowObject.removeFile({} as any as flowjs.FlowFile);
let flowFile: flowjs.FlowFile = flowObject.getFromUniqueIdentifier("");
let num: number = flowObject.getSize();
num = flowObject.sizeUploaded();
num = flowObject.timeRemaining();

// flow options
let flowOptions: flowjs.FlowOptions = {};
flowOptions.target = "";
flowOptions.singleFile = true;
flowOptions.chunkSize = 0;
flowOptions.forceChunkSize = true;
flowOptions.simultaneousUploads = 0;
flowOptions.fileParameterName = "";
flowOptions.query = {};
flowOptions.headers = {};
flowOptions.withCredentials = true;
flowOptions.method = "";
flowOptions.testMethod = "";
flowOptions.uploadMethod = "";
flowOptions.allowDuplicateUploads = true;
flowOptions.prioritizeFirstAndLastChunk = true;
flowOptions.testChunks = true;
flowOptions.preprocess = () => {};
flowOptions.initFileFn = () => {};
flowOptions.generateUniqueIdentifier = () => {};
flowOptions.maxChunkRetries = 0;
flowOptions.chunkRetryInterval = 0;
flowOptions.progressCallbacksInterval = 0;
flowOptions.speedSmoothingFactor = 0;
flowOptions.successStatuses = [200, 201, 202];
flowOptions.permanentErrors = [404, 415, 500, 501];

// flow file
flowObject = flowFile.flowObj;
let htmlFile: File = flowFile.file;
let str: string = flowFile.name;
str = flowFile.relativePath;
num = flowFile.size;
str = flowFile.uniqueIdentifier;
num = flowFile.averageSpeed;
num = flowFile.currentSpeed;
let chunksArray: readonly flowjs.FlowChunk[] = flowFile.chunks;
chunksArray[0].abort();
num = chunksArray[0].chunkSize;
num = chunksArray[0].endByte;
flowFile = chunksArray[0].fileObj;
flowObject = chunksArray[0].flowObj;
flowChunkParams = chunksArray[0].getParams();
num = chunksArray[0].startByte;
bool = flowFile.paused;
bool = flowFile.error;
num = flowFile.progress();
flowFile.pause();
flowFile.resume();
flowFile.cancel();
flowFile.retry();
flowFile.bootstrap();
bool = flowFile.isUploading();
bool = flowFile.isComplete();
num = flowFile.sizeUploaded();
num = flowFile.timeRemaining();
str = flowFile.getExtension();
str = flowFile.getType();
