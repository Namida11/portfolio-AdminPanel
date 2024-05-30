class Router {
  constructor() {
    this.routers = {};
  }

  addRoute(path, handler, isExtractId = false) {
    this.routers[path] = { handler, isExtractId };
  }

  handlerRoute(req, res) {
    const { url } = req;

    let splittedUrl = url;
    if (this.isExtractUrl(url)) splittedUrl = this.getBaseUrl(url);

    const router = this.routers[splittedUrl];

    if (!router) return false;
    const { handler, isExtractId } = router;

    const id = isExtractId ? this.getId(url) : null;

    handler(req, res, id);
    return true;
  }

  isExtractUrl(url) {
    const lastPart = url.split("/").pop();
    return !isNaN(+lastPart);
  }

  getBaseUrl(url) {
    const splitedUrl = url.split("/");
    splitedUrl.pop();
    return `${splitedUrl.join("/")}/`;
  }
  getId(url) {
    return +url.split("/").pop();
  }
}

module.exports = Router;
