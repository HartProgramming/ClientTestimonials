/* QuerySelectors for image, text, buttons, name, rating */
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const stars = document.querySelector("#stars");
let reviewerName = document.querySelector("#name");
const person = document.querySelector("#person");
const review = document.querySelector("#review");

/* Create Testimonial Class that includes image of person, review stars,
name, and the review */
class Testimonial {
    constructor(personName, personImage, personReview, starsReview) {
        this.personName = personName;
        this.personImage = personImage;
        this.personReview = personReview;
        this.starsReview = starsReview;
    }
}

/* Three different testimonial objects that will be referenced in loop */
const r0 = new Testimonial("Sandy", "https://img.search.brave.com/iiSEU7jMT2a8HC0xwrW_tXSXDgzUwb4Y2LEbPdtMZtI/rs:fit:576:823:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2M5L2Y4/L2NiL2M5ZjhjYjJj/YjRmMDI0ZjQ2M2M3/NDBiNDJiNDU3MWFh/LmpwZw", "It was fantastic!", "https://img.search.brave.com/oyqrnKsC3m-QFNtRsKhDNNckPXdG6NnHqzAr9uiRWRk/rs:fit:540:214:1/g:ce/aHR0cDovL2pvZHli/bWlsbGVyLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOC8w/MS8xNS5qcGc");
const r1 = new Testimonial("Edward", "https://img.search.brave.com/bE6rF2-FxkR2Q4yAcjU8vbY4dsLkEkMfNJVZJjzvo_4/rs:fit:440:659:1/g:ce/aHR0cHM6Ly93d3cu/c21hcnRoZWFkc2hv/dHMuY29tL2FjdG9y/LWhlYWRzaG90cy9o/ZWFkc2hvdHMvbmF0/dXJhbC1saWdodC1o/ZWFkc2hvdC0wNjk1/LmpwZw", "The service was excellent", "https://img.search.brave.com/oyqrnKsC3m-QFNtRsKhDNNckPXdG6NnHqzAr9uiRWRk/rs:fit:540:214:1/g:ce/aHR0cDovL2pvZHli/bWlsbGVyLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOC8w/MS8xNS5qcGc");
const r2 = new Testimonial("Cacey", "https://img.search.brave.com/REUfMzmD3ZdB7oryPCWoRyxlFyyvCHlPUzVQ8YzTd-Q/rs:fit:1000:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMxLnNxdWFyZXNw/YWNlLmNvbS9zdGF0/aWMvNThkMTcwNmYy/OTk0Y2E1MzZiY2M1/ZmMzLzU5MDUxZmZm/NDQwMjQzMWFjNDkx/NWQ5Yi81OTI0NzVh/ZDQ2YzNjNDY3MzY1/ODEzNTcvMTQ5NTU2/MjIwNTU0MS9ISElN/R18wMjc2XzEwMDB4/MTUwMF83MmRwaS5q/cGc", "It was great!", "https://img.search.brave.com/oyqrnKsC3m-QFNtRsKhDNNckPXdG6NnHqzAr9uiRWRk/rs:fit:540:214:1/g:ce/aHR0cDovL2pvZHli/bWlsbGVyLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOC8w/MS8xNS5qcGc");

/* Array of testimonial objects that can be looped through and accessed to 
change the testimonial slider */
const testimonialArray = [r0, r1, r2];

/* Utilize the for of loop on the array, set it equal to zero to begin the
button functions and then upon each click increment by 1 or decrement by 1 */
for(let x of testimonialArray){
    x = 0;
    stars.src = testimonialArray[x].starsReview;
    reviewerName.textContent = testimonialArray[x].personName;
    person.src = testimonialArray[x].personImage;
    review.textContent = testimonialArray[x].personReview;
    x += 1;
right.addEventListener("click", function () {
    if(x === 0){
        stars.src = testimonialArray[x].starsReview;
        reviewerName.textContent = testimonialArray[x].personName;
        person.src = testimonialArray[x].personImage;
        review.textContent = testimonialArray[x].personReview;
        x += 1;
        console.log(x)
    }else if(x === 1){
        stars.src = testimonialArray[x].starsReview;
        reviewerName.textContent = testimonialArray[x].personName;
        person.src = testimonialArray[x].personImage;
        review.textContent = testimonialArray[x].personReview;
        x += 1;
        console.log(x)
    }else if(x === 2){
        stars.src = testimonialArray[x].starsReview;
        reviewerName.textContent = testimonialArray[x].personName;
        person.src = testimonialArray[x].personImage;
        review.textContent = testimonialArray[x].personReview;
        x = 0;
        console.log(x);
    }
})
left.addEventListener("click", function(){
    if(x === 0){
        stars.src = testimonialArray[x].starsReview;
        reviewerName.textContent = testimonialArray[x].personName;
        person.src = testimonialArray[x].personImage;
        review.textContent = testimonialArray[x].personReview;
        x = 2;
    }else if(x === 2){
        stars.src = testimonialArray[x].starsReview;
        reviewerName.textContent = testimonialArray[x].personName;
        person.src = testimonialArray[x].personImage;
        review.textContent = testimonialArray[x].personReview;
        x -= 1;
    }else if(x === 1){
        stars.src = testimonialArray[x].starsReview;
        reviewerName.textContent = testimonialArray[x].personName;
        person.src = testimonialArray[x].personImage;
        review.textContent = testimonialArray[x].personReview;
        x -= 1;
    }
})
}

