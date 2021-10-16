const Zotero = {
    getCollectionItems: (
        ZOTERO_API_KEY /*: string */,
        ZOTERO_API_USER_ID /*: string */
    ) /*: Promise<{zoteroApiKey: string, zoteroApiUserId: string}> */ => {
        console.log("ZOTERO_API_KEY == " + ZOTERO_API_KEY);
        console.log("ZOTERO_API_USER_ID == " + ZOTERO_API_USER_ID);
        return Promise.resolve({
            zoteroApiKey: ZOTERO_API_KEY,
            zoteroApiUserId: ZOTERO_API_USER_ID,
        });
    },
};
