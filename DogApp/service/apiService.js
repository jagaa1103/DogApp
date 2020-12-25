// fetch image url by breed's name
export async function getImageURL(breedName) {
    const url = "https://dog.ceo/api/breed/" + breedName + "/images/random/1";
    try {
        // request data by url
        let res = await fetch(url);
        // when success data fetching from API
        // parsing response to JSON format
        let json = await res.json();
        return json.message[0];
    } catch {
        return null;
    }
}


// fetch dog breeds from API
export async function fetchBreedList () {
    const url = "https://dog.ceo/api/breeds/list";
    try {
        // request data by url
        const res = await fetch(url);
        // when success data fetching from API
        // parsing response to JSON format
        const json = await res.json();
        if (json.status === "success") { // check json data status 'success'
            return json.message;
        }
        return null;
    } catch (e) {
        return null;
    }
}


