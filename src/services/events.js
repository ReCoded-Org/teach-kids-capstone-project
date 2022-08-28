export function getEvents() {
    return fetch("https://reach-capstone.herokuapp.com/api/events").then((res) => res.json());
}

export function getOrganizations() {
    return fetch("http://localhost:3000/organizations").then((res) =>
        res.json()
    );
}
