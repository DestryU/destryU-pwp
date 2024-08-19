function helloSection () {
    const targetSection = document.getElementById('helloSection')
}

function helloReset() {
    const targetSection = document.getElementById('helloSection')

    targetSection.value = `
    <button class="text-5xl text-neutral-300 opacity-0 text-center pb-[5rem] fade-0" onClick="whoReset()">Who?</button>
    `
}



function whoSection() {
    const targetSection = document.getElementById('whoSection')

    targetSection.innerHTML = `
        <div class="flex flex-col min-w-[18rem] max-w-[30rem] p-8">
            <button class="text-5xl text-neutral-300 opacity-0 text-center fade-0 pb-8" onclick="whoReset()">Who?</button>
            <p class="text-neutral-300 text-center fade-1 pb-4">Hello, my name is Destry.</p>
            <p class="text-neutral-300 text-center fade-2">I like books and music,</p>
            <p class="text-neutral-300 text-center fade-3">I like games of both the board and video variety,</p>
            <p class="text-neutral-300 text-center fade-4 pb-4">and I like cartoons and toys.</p>
            <p class="text-neutral-300 text-center fade-5">In a lot of ways,</p>
            <p class="text-neutral-300 text-center fade-6 pb-4">I\'m still a kid that believes in make-pretend.</p>
            <p class="text-neutral-300 text-center fade-7 pb-4">But more important than what I like is what I can</p>
            <p class="text-neutral-300 text-center fade-8 pb-4">DO</p>
            <p class="text-neutral-300 text-center fade-9">... and what I do is <em>Interactive Design</em>.</p>
        </div>
        <img src="../assets/Profile2.png" alt="placeholder" class="self-center fade-10 rounded-full min-h-[12rem] max-h-[25em] p-8">
    `
}

function whoReset() {

    const targetSection = document.getElementById('whoSection')
    targetSection.innerHTML = `
        <button class="self-center font-bold text-8xl px-16 text-neutral-300" onclick="whoSection()">Who?</button>
    `
}



function whatSection() {
    const targetSection = document.getElementById('whatSection')

    targetSection.innerHTML = `
        <div class="flex flex-col min-w-[18rem] max-w-[30rem] p-8">
            <button class="text-5xl text-neutral-800 opacity-0 text-center fade-0 pb-8" onclick="whatReset()">What?</button>
            <p class="text-neutral-800 text-center fade-1">The obvious question is:</p>
            <p class="text-neutral-800 text-center fade-2 pb-4">'What is Interactive Design?'</p>
            <p class="text-neutral-800 text-center fade-3">That's a good question...</p>
            <p class="text-neutral-800 text-center fade-4 pb-4">... and kind of hard to answer.</p>
            <p class="text-neutral-800 text-center fade-5 pb-4">If design is what happens when we reach out to the world around us, then...</p>
            <p class="text-neutral-800 text-center fade-6">I guess you could say that my job is making sure that the world reaches out to touch us </p>
            <p class="text-neutral-800 text-center fade-7">in <em>meaningful</em> and <strong>engaging</strong> ways.</p>
        </div>
        <img src="https://placehold.co/300x300" alt="placeholder" class=" p-8 fade-8">
    `
}

function whatReset() {

    const targetSection = document.getElementById('whatSection')
    targetSection.innerHTML = `
        <button class="self-center font-bold text-8xl px-16 text-neutral-800" onclick="whatSection()">What?</button>
    `
}



function whereSection() {
    const targetSection = document.getElementById('whereSection')

    targetSection.innerHTML = `
        <div class="flex flex-col min-w-[18rem] max-w-[30rem] p-8">
            <button class="text-5xl text-neutral-300 fade-0 pb-8" onclick="whereReset()">Where?</button>
            <p class="text-neutral-300 text-center fade-1 pb-4">Everywhere!</p>
            <p class="text-neutral-300 text-center fade-2 pb-4">And everything!</p>
            <p class="text-neutral-300 text-center fade-3 pb-4">If it was made <em>by</em> people, and it was made <em>for</em> people, then that means someone designed it!</p>
            <p class="text-neutral-300 text-center fade-4 pb-4">BUT</p>
            <p class="text-neutral-300 text-center fade-5">... not everyone is good at design.</p>
        </div>
        <div class="flex flex-col justify-center items-center max-w-fit p-8">
            <img src="../assets/Design.png" alt="placeholder" class="fade-6 p-8">
            <p class="text-neutral-300 text-justify max-w-[28rem] fade-7">"Good designs are hard, complex, and take a lot of time to get right. It should be no surprise that there's a lot of bad design in the world."</p>
            <p></p>
        </div>
    `
}

function whereReset() {

    const targetSection = document.getElementById('whereSection')
    targetSection.innerHTML = `
        <button class="self-center font-bold text-8xl px-16 text-neutral-300" onclick="whereSection()">Where?</button>
    `
}



function whySection() {
    const targetSection = document.getElementById('whySection')

    targetSection.innerHTML = `
      <div class="flex flex-col min-w-[18rem] max-w-[30rem] p-8">
        <button class="text-5xl text-neutral-800 fade-0 pb-8" onclick="whyReset()" >Why?</button>
        <p class="text-neutral-800 text-center fade-1 pb-4">Because bad design <em>REALLY</em> sucks.</p>
        <p class="text-neutral-800 text-center fade-2 pb-4">Think about the fiddly knobs,<br>the pull doors you try to push,<br>or the HaRd tO rEaD tExT you deal with.<br>Every. Single. Day.</p>
<!--        <p class="text-neutral-800 text-center fade-3 pb-4">Every. Single. Day.</p>-->
        <p class="text-neutral-800 text-center fade-4 pb-4">It feels awful.</p>
        <p class="text-neutral-800 text-center fade-5">But good design?</p>
        <p class="text-neutral-800 text-center fade-6 pb-4">Good design is invisible.</p>
        <p class="text-neutral-800 text-center fade-7 pb-4">No matter what you do, I can assure you that you don't want to be remembered as the product that didn't work, or the website that felt awful to use.</p>
        <p class="text-neutral-800 text-center fade-8 pb-4">We all need good design.</p>
        <p class="text-neutral-800 text-center fade-9">And I can help you with that.</p>
      </div>
      <img src="https://placehold.co/300x300" alt="placeholder" class="p-8 fade-10">
    `
}

function whyReset() {

    const targetSection = document.getElementById('whySection')
    targetSection.innerHTML = `
        <button class="self-center font-bold text-8xl px-16 text-neutral-800" onclick="whySection()">Why?</button>
    `
}




function howSection() {
    const targetSection = document.getElementById('howSection')

    targetSection.innerHTML = `
    
    <h1 class="text-white">Follow my work, support my projects, or contact me to chat</h1>
    
    <div class="w-[250px] h-[250px] bg-blue-500 p-3 rounded-3xl">
        <button>
            <img src="https://placehold.co/300x300" alt="">
        </button>
    </div>
    
    <div class="w-[250px] h-[250px] bg-blue-500 p-3 rounded-3xl">
        <button>
            <img src="https://placehold.co/300x300" alt="">
        </button>
    </div>
    
    <div class="w-[250px] h-[250px] bg-blue-500 p-3 rounded-3xl">
        <button>
            <img src="https://placehold.co/300x300" alt="">
        </button>
    </div>
    
    <div class="w-[250px] h-[250px] bg-blue-500 p-3 rounded-3xl">
        <button>
            <img src="https://placehold.co/300x300" alt="">
        </button>
    </div>
    
    <div class="w-[250px] h-[250px] bg-blue-500 p-3 rounded-3xl">
        <button>
            <img src="https://placehold.co/300x300" alt="">
        </button>
    </div>
    `
}