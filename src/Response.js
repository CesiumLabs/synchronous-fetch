class Response {

    constructor(res) {
        Object.defineProperty(this, "data", { value: res });
    }

    get url() {
        return this.data.url;
    }

    get statusCode() {
        return this.data.statusCode;
    }

    get ok() {
        return this.statusCode === 200;
    }

    get headers() {
        return this.data.headers;
    }

    get contentType() {
        return this.headers['content-type'];
    }

    /**
     * Decode response as json
     * @returns {any}
     */
    json() {
        const str = this.text();
        return JSON.parse(str);
    }

    /**
     * Decode response as text
     * @returns {string}
     */
    text() {
        const str = this.data.body.toString();
        return str;
    }

    /**
	 * Decode response as buffer (non-spec api)
	 * @returns {Buffer}
	 */
    buffer() {
        return this.data;
    }

    /**
     * Return raw response as Blob
     * @returns {Blob}
     */
    blob() {
        return new Blob([this.buffer()]);
    }

    /**
     * Decode response as ArrayBuffer
     * @returns {ArrayBuffer}
     */
    arrayBuffer() {
        const { buffer, byteOffset, byteLength } = this.buffer();
        return buffer.slice(byteOffset, byteOffset + byteLength)
    }

}

Object.defineProperties(Response.prototype, {
    body: { enumerable: true },
    arrayBuffer: { enumerable: true },
    blob: { enumerable: true },
    json: { enumerable: true },
    text: { enumerable: true }
})

module.exports = Response;