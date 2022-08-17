export function getEvents() {
    return fetch("http://localhost:3000/events").then((res) => res.json());
}

export function getOrganizations() {
    return fetch("http://localhost:3000/organizations").then((res) =>
        res.json()
    );
}
