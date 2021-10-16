const Zotero = {
    getCollectionItems: (
        ZOTERO_API_KEY /*: string */,
        ZOTERO_API_USER_ID /*: string */
    ) /*: Promise<Object> */ => {
		var token = 'Bearer '+ access_token;
		var options =  {
		  headers:{'Zotero-API-Key': ZOTERO_API_KEY}
		}
        return Promise.resolve(___request(
            "GET",
			"https://api.zotero.org/users/" + ZOTERO_API_USER_ID + "/collections/" + E8Q8GWQ6 + "/items/?v=3"
            options
        ));
        // return Promise.resolve({
        //     ZOTERO_API_KEY,
        //     ZOTERO_API_USER_ID,
        // });
    },
};
