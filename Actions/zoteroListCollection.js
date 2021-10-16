const ZOTERO_API_KEY = ___persistence.get("ZOTERO_API_KEY");
const ZOTERO_API_USER_ID = ___persistence.get("ZOTERO_API_USER_ID");

Zotero.getCollectionItems(ZOTERO_API_KEY, ZOTERO_API_USER_ID)
    .then((response /*: Object */) /*: Object */ => {
        return response.getData();
    })
    .then((items /*: Object */) /*: Object */ => {
        console.log(items);
    })
    .catch((e /*: Error */) /*: void */ => {
        console.error(e);
    });
