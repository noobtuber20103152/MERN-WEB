
const host = "http://localhost:5000/api/blog/story";
const AllStory = async () => {
    const response = await fetch(`${host}`, {
        method: "GET",
        headers: {
            'Content-Type': "application/json"
        },
    })
    const json = await response.json();
    console.log(json);
    return json;
}
export default AllStory;
