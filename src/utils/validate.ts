
const validate = {
  websocketUrl(url: string):boolean {
    return url !== undefined && url !== '';
  }
};

export default validate;
