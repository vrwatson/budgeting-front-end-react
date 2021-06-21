export const apiURL = () => {
    if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") {
        return "http://localhost:3333"
    }
    return "https://powerful-hollows-13507.herokuapp.com";
}