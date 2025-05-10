const axios = require('axios');

async function getInstagramBusinessAccountID(accessToken) {
    try {
        const response = await axios.get(`https://graph.facebook.com/v19.0/me/accounts?access_token=${accessToken}`);
        const facebookPageID = response?.data?.data[0]?.id;
        if (!facebookPageID) throw new Error("Facebook Page ID not found.");

        const url = `https://graph.facebook.com/v19.0/${facebookPageID}?fields=instagram_business_account&access_token=${accessToken}`;
        const response2 = await axios.get(url);
        const instagramUserID = response2?.data?.instagram_business_account?.id;
        if (!instagramUserID) throw new Error("Instagram Business Account ID not found.");

        return instagramUserID;
    } catch (error) {
        throw new Error(`Error getting Instagram Business Account: ${error.response?.data?.error?.message || error.message}`);
    }
}

async function createInstagramMedia(igUserId, accessToken, imageUrl, caption) {
    try {
        const mediaUrl = `https://graph.facebook.com/v19.0/${igUserId}/media`;
        const mediaResponse = await axios.post(mediaUrl, {
            image_url: imageUrl,
            caption,
            access_token: accessToken,
        });

        return mediaResponse?.data?.id;
    } catch (error) {
        throw new Error(`Error creating media: ${error.response?.data?.error?.message || error.message}`);
    }
}

async function publishInstagramMedia(creationId, igUserId, accessToken) {
    try {
        const publishUrl = `https://graph.facebook.com/v19.0/${igUserId}/media_publish`;
        const publishResponse = await axios.post(publishUrl, {
            creation_id: creationId,
            access_token: accessToken,
        });

        return publishResponse?.data;
    } catch (error) {
        throw new Error(`Error publishing media: ${error.response?.data?.error?.message || error.message}`);
    }
}

async function postToInstagram({ accessToken, imageUrl, caption }) {
    const igUserId = await getInstagramBusinessAccountID(accessToken);
    const creationId = await createInstagramMedia(igUserId, accessToken, imageUrl, caption);
    const publishResult = await publishInstagramMedia(creationId, igUserId, accessToken);
    return publishResult;
}

module.exports = {
    postToInstagram
};
