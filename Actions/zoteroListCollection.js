const ZOTERO_API_KEY = ___persistence.get("ZOTERO_API_KEY");
const ZOTERO_API_USER_ID = ___persistence.get("ZOTERO_API_USER_ID");
console.log("ZOTERO_API_KEY == " + ZOTERO_API_KEY);
console.log("ZOTERO_API_USER_ID == " + ZOTERO_API_USER_ID);
const { default: api } = ZoteroApiClient;

api().library('user', ZOTERO_API_USER_ID)
  .collections('E8Q8GWQ6')
  .items()
  .get()
  .then((response /*: Object */) /*: Object */ => {
    return response.getData();
  })
  .then((items /*: Object */) /*: Object */ => {
    console.log(items);
  })  
  .catch((e /*: Error */) /*: void */ => {
    console.error(e);  
  });
