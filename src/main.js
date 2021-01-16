const sr = require("sync-request");
const Response = require("./Response");

/**
 * Synchronous fetch api
 * @param {RequestInfo} requestInfo Request info
 * @param {RequestInit} [requestInit={}] Request Init
 * @returns {Response}
 */
module.exports = function (requestInfo, requestInit = {}) {
    requestInfo = new URL(requestInfo.url || requestInfo);
    const ops = {
        method: (requestInit.method || "GET").toUpperCase(),
        requestInit: requestInit || {}
    };

    const res = sr(ops && ops.method, requestInfo, ops.requestInit);
    return new Response(res);
}