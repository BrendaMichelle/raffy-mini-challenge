const ul = document.querySelector('ul#animals')
const newSightingForm = document.querySelector('form#new-animal-sighting-form')
const travelerLikeBtn = document.querySelector('div#profile button.like-button')

/*************** FUNCTIONS ***************/
function getTraveler() {
    fetch('http://localhost:3000/travelers/1')
        .then(response => response.json())
        .then(travelerObject => {
            renderTravelerInfo(travelerObject)
            travelerObject.animalSightings.forEach(sightingObject => renderAnimalSighting(sightingObject))
        })
}

function renderTravelerInfo(travelerObject) {
    const img = document.querySelector('div#profile img')
    img.src = travelerObject.photo
    img.alt = travelerObject.name
    const h2 = document.querySelector('div#profile h2')
    h2.textContent = travelerObject.name
    const em = document.querySelector('div#profile em')
    em.textContent = travelerObject.nickname
    const p = document.querySelector('#profile > p:nth-child(4)')
    p.textContent = `${travelerObject.likes} Likes`
}

function renderAnimalSighting(sightingObject) {
    const li = document.createElement('li')
    li.dataset.id = sightingObject.id

    li.innerHTML = `
                <p>${sightingObject.description}</p>
                <img src='${sightingObject.photo}' alt='${sightingObject.species}'/>
                <a href='${sightingObject}' target='_blank'>Here's a video about the ${sightingObject.species} species!</a>
                <p class='likes-display'>${sightingObject.likes} Likes</p>
                <button class="like-button" type="button">Like</button>
                <button class="delete-button" type="button">Delete</button>
                <button class="toggle-update-form-button" type="button">Toggle Update Form</button>
                <form class="update-form" style="display: none;">
                  <input type="text" value="${sightingObject.description}"/>
                  <input type="submit" value="Update description">
                </form>`

    ul.append(li)
}


/*************** EVENT LISTENERS ***************/

newSightingForm.addEventListener('submit', e => {
    e.preventDefault()
    const speciesInput = e.target.species.value
    const videoInput = e.target.video.value
    const photoInput = e.target.photo.value
    const descriptionInput = e.target.description.value


    fetch('http://localhost:3000/animalSightings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            species: speciesInput,
            photo: photoInput,
            link: videoInput,
            description: descriptionInput,
            likes: 0,
            travelerId: 1
        })
    })
        .then(response => response.json())
        .then(newSightingObject => renderAnimalSighting(newSightingObject))
})

travelerLikeBtn.addEventListener('click', e => {
    const likePtag = e.target.previousElementSibling
    const newLikes = parseInt(likePtag.textContent) + 1

    fetch('http://localhost:3000/travelers/1', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ likes: newLikes })
    })
        .then(response => response.json())
        .then(updatedTravelerObject => {
            likePtag.textContent = `${updatedTravelerObject.likes} Likes`
        })
})

ul.addEventListener('click', e => {
    if (e.target.matches('button.like-button')) {
        const li = e.target.closest('li')
        const likesPtag = li.querySelector('p.likes-display')
        const newLikes = parseInt(likesPtag.textContent) + 1

        fetch(`http://localhost:3000/animalSightings/${li.dataset.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ likes: newLikes })
        })
            .then(response => response.json())
            .then(updatedSightingObject => {
                likesPtag.textContent = `${updatedSightingObject.likes} Likes`
            })
    }
    else if (e.target.matches('button.delete-button')) {
        const li = e.target.closest('li')
        li.remove()

        fetch(`http://localhost:3000/animalSightings/${li.dataset.id}`, {
            method: 'DELETE'
        })
    }
    else if (e.target.matches('button.toggle-update-form-button')) {
        const form = e.target.nextElementSibling
        form.style.display = form.style.display === 'block' ? 'none' : 'block'
    }
})

ul.addEventListener('submit', e => {
    if (e.target.matches('form.update-form')) {
        e.preventDefault()
        const li = e.target.closest('li')

        const descriptionInput = e.target[0].value

        fetch(`http://localhost:3000/animalSightings/${li.dataset.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ description: descriptionInput })
        })
            .then(response => response.json())
            .then(updatedSightingObject => {
                const descriptionPtag = li.querySelector('p')
                descriptionPtag.textContent = updatedSightingObject.description
            })
    }
})



/*************** APP INIT ***************/
getTraveler()
