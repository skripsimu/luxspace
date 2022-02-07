export default function fetchData({ url, method = 'GET', host = process.env.REACT_APP_APIHOST }) {
    return fetch(`${host}${url}`, {
        method, mode: "cors", headers: { "Content-Type": "application/json" },
    }).then(async response => {
        const responseJson = await response.json();
        if (response.ok) return responseJson;
        throw new Error(JSON.stringify(responseJson));
    })
}