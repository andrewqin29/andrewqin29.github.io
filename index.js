let text_index = 0;
let char_index = 0;
let changing_texts = ["software developer", "website designer", "competitive programmer"];
let changing = document.getElementById("changing-iam");
changing.innerText = '';
function add_char() {
    let current_text = changing_texts[text_index];
    if (char_index === current_text.length) {
        char_index = 0;
        text_index++;
        changing.innerText = '';
        if (text_index === changing_texts.length) {
            text_index = 0;
        }
        current_text = changing_texts[text_index];
    }
    let space_behind = false;
    if (char_index !== 0) {
        if (current_text[char_index-1] === ' ') {
            space_behind = true;
            changing.innerText += ' '+current_text[char_index];
        }
    }
    if (!space_behind) {
        changing.innerText += current_text[char_index];
    }
    char_index++;
}
setInterval(function() {add_char()}, 250);

function hover(element) {
    element.setAttribute('src', 'resources/pose2v5.png');
}

function unhover(element) {
     element.setAttribute('src', 'resources/pose1v5.png');
}
function scroll_to(id) {
    let y = document.getElementById(id).offsetTop - 0.2*window.innerWidth;
    window.scrollTo({top: y, left: 0, behavior: 'smooth'});
}
