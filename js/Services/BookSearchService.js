import HttpUtils from "../Utils/HttpUtils";

export const searchBook = (bookName) => {
  let httpUtils = new HttpUtils();
  return httpUtils.setUrl('http://www.biquge5200.com/modules/article/search.php?searchkey=' + bookName);
};