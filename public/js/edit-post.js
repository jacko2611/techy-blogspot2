async function editFormHandler(event){

    event.preventDefault();
    
    const title = document.querySelector('input[name="post-title"]')?.value;
    const content = document.querySelector('textarea[name="post-content"]')?.value;
    const id = document.querySelector('input[name="post-id"]')?.value;

    console.log(id)
    console.log(content)
    console.log(title)

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT', // or PATCH
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok){
        document.location.replace('/dashboard/');
    }else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);