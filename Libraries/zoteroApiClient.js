const Zotero = {
    getCollectionItems: (
        ZOTERO_API_KEY /*: string */,
        ZOTERO_API_USER_ID /*: string */
    ) /*: Promise<Object> */ => {
        return Promise.resolve({
            ZOTERO_API_KEY,
            ZOTERO_API_USER_ID,
        });
    },
};
