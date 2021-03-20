# JS Mini Challenge


## Setup

- Fork this repo, then run `git clone` to download your fork locally. Then `cd` into the downloaded directory and open it in your text editor with `code .`.
- Run `json-server --watch db.json --routes routes.json` to get the backend started
- Open the `index.html` file on your browser

## Endpoints

Your base URL for your API will be: http://localhost:3000

The endpoints you may need are:

- GET `/travelers/1`
- PATCH `/travelers/1`
- GET `/animalSightings`
- POST `/animalSightings`
- PATCH `/animalSightings/:id`
- DELETE `/animalSightings/:id`

Be sure to check out what data you are getting returned when you make a request to a certain route!


## Assignment

In this challenge, we're going to tie everything we learned this week together. We'll have a lot of the same deliverables, but this time, we need to add in persistence where necessary to save data! We're going to work on Raffy's Amazon trip page and give our users the ability to:

- See information about the traveler with the ID of 1 including their image, name, nickname, and number of likes when the page loads
- See all the traveler's animal sightings when the page loads
- Add a new animal sighting
- Click on the heart button to increase the number of likes for the traveler profile and still see the updated likes when I reload the page
- Click an animal sighting's like button to increase its likes
- Click an animal sighting's delete button to delete it
- Click on the animal sighting's 'Toggle Update Form' button to toggle the update form for that animal sighting
- Submit an animal sighting's form to update that animal sighting's description

__________

There's a section in this Readme file for your notes on each deliverable. As you go through the deliverables, write down some notes in this file on how you solved each problem. It'll help reinforce what you learned and give you a head start next time you see a similar problem.

## Deliverable 1: Show traveler info upon page load

When the page loads, the information about the traveler should display including their name, image, nickname, and number of likes.


**YOUR NOTES**
```

```


## Deliverable 2: Show animal sightings upon page load

When the page loads, each animal sighting of the travler should appear on the page in the `ul#collection` section. Each animal sighting should look like:

```html
<li data-id='{id here}'>
  <p>{description here}</p>
  <img src='{image url here}' alt='{species here}'/>
  <a href='video url here' target='_blank'>Here's a video about the {species here} species!</a>
  <p class='likes-display'>{number of likes here} Likes</p>
  <button class="like-button" type="button">Like</button>
  <button class="delete-button" type="button">Delete</button>
  <button class="toggle-update-form-button" type="button">Toggle Update Form</button>
  <form class="update-form" style="display: none;">
    <input type="text" value="{description here}"/>
    <input type="submit" value="Update description">
    </form>
</li>

```

**YOUR NOTES**
```

```




## Deliverable 3: Add a new animal sighting

When the user submits the form to add a new animal sighting post, the animal sighting should render on the page without reloading and should persist (it sohuld still be visible if the page reloads).Your animal sighting object must have a `travelerId` key with a value of `1` for the app to work properly.

**YOUR NOTES**
```

```




## Deliverable 4: Increase traveler likes

When the user clicks on the traveler's like button, the new number of likes should display on the page without reloading the page. The new number of likes should persist (if the page reloads, the new number of likes should still display).

**YOUR NOTES**
```

```



## Deliverable 5: Like an animal sighting

When the user clicks on an animal sighting's like button, the new number of likes for that animal should display on the page without reloading the page. The new number of likes should persist (if the page reloads, the new number of likes should still display).

**YOUR NOTES**
```

```



## Deliverable 6: Delete an animal sighting

When the user clicks on an animal sighting's delete button, that animal should be be removed from the page without reloading the page. The deletion should persist (if the page reloads, that animal sighting does not reappear).

**YOUR NOTES**
```

```


## Deliverable 7: Toggle the update form for an animal sighting

When the user clicks on an animal sighting's 'toggle update form' button, that animal sighting's form should should toggle between displaying and not displaying on the page.

**YOUR NOTES**
```

```


## Deliverable 8: Update an animal sighting's description

When the user submits an animal sighting's update form, the updated animal sighting's description should display on the page without reloading the page. The udpated description should persist (if the page refreshes, the updated description should still display).


**YOUR NOTES**
```

```

