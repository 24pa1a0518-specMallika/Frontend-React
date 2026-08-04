fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((users)=>{
        let table = document.getElementById("table")
            users.forEach((user)=>{
                let row=document.createElement("tr")
                row.innerHTML=`
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                `
                table.appendChild(row)
            })
    })
    .catch((error)=>console.log(error))