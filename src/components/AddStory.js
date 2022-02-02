
const host = "http://localhost:5000/api/blog/blogcontent";
const AddStory = async (name, email, title, description, tag) => {
    const response = await fetch(`${host}`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ name: name, email: email, title: title, description: description, tag: tag })
    })
    const json = await response.json();
    console.log(json);
}
export default AddStory;
