const tagsEl = document.getElementById("tags")
const textarea = document.getElementById("textarea")

textarea.focus()      // focus on the textarea as soon as you open the page

textarea.addEventListener("keyup", (e) => {            //when the key is released this event will be triggered
    createTags(e.target.value)

    if(e.key === "Enter") {
        setTimeout(() => {
            e.target.value = ""
        }, 10);

        randomSelect()
    }
})

function createTags(input) {
    const tags = input.split(",").filter(tag => tag.trim() !== "").map(tag => tag.trim())          //splitting the tags by a , 

    tagsEl.innerHTML = ""

    tags.forEach(tag => {
        const tagEl = document.createElement("span")           //creates a span for every tag in the html file
        tagEl.classList.add("tag")                              //adds the class of "tag" to it
        tagEl.innerText = tag                                   //the innertext will be defined by tag
        tagsEl.appendChild(tagEl)                               
    });
}                                                                                                  //filtering the tag by whitespace so it cant be empty (!== "") the map trim removes whitespace after a value


function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
            
        }, 100);
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll(".tag")
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add("highlight")
}

function unHighlightTag(tag) {
    tag.classList.remove("highlight")
}