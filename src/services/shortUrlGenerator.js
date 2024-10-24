
const urlMapping = new Map();

const generateShortUrl = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let shortCharUrl = '';
    for (let i = 0; i < 6; i++) {
        shortCharUrl += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return shortCharUrl;
};


export const shortUrlGenerator = (originalUrl) => {

    if (!isUrlValid(originalUrl)) {
        throw new Error('Invalid URL');
    }

    if (urlMapping.has(originalUrl)) {
        return urlMapping.get(originalUrl);
    } else {
        let newShortUrl = generateShortUrl();
        while ([...urlMapping.values()].includes(newShortUrl)) {
            newShortUrl = generateShortUrl();
        }
        urlMapping.set(originalUrl, newShortUrl);
        return newShortUrl;
    }
};

const isUrlValid = (urlString) => {
    try {
        new URL(urlString);
        return true;
    } catch (e) {
        return false;
    }
};
