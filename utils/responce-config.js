class ResponceConfig {
  constructor(status, requset, responce, contentType, data) {
    this.status = status;
    this.requset = requset;
    this.responce = responce;
    this.contentType = contentType;
    this.data = data;
  }
}

module.exports = ResponceConfig;
