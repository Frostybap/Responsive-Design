

var all_categories = document.getElementById("all-categories");
var closes = document.getElementById("close");
var overlay_wrapper = document.querySelector(".overlay-wrapper");


all_categories.addEventListener("click", function(){
    overlay_wrapper.classList.add("active");
});

closes.addEventListener("click", function(){
    overlay_wrapper.classList.remove("active");
});




var category_box = document.querySelector(".category-box-wrapper");
var category = document.querySelector(".category-box-wrapper .category");

var Promotion = document.getElementById("Promotion");
var Habilitation = document.getElementById("Habilitation");
var Juniorprofessur = document.getElementById("Juniorprofessur");
var Berufungs_verfahren = document.getElementById("Berufungs-verfahren");
var Arbeitsplatz = document.getElementById("Arbeitsplatz");
var Familie = document.getElementById("Familie");
var Mobilität = document.getElementById("Mobilität");
var Blick_aus_dem_Ausland = document.getElementById("Blick-aus-dem-Ausland");
var Allgemein = document.getElementById("Allgemein");

var text_box_heading = document.querySelector(".text-box .heading");
var text_box_p = document.querySelector(".text-box p");


category_box.addEventListener("mouseover", function(){
    category.classList.remove("active");
});
category_box.addEventListener("mouseout", function(){
    category.classList.add("active");
});



Promotion.addEventListener("mouseover", function(){
    text_box_heading.innerHTML = 'Promotion';
    text_box_p.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
});
Habilitation.addEventListener("mouseover", function(){
    text_box_heading.innerHTML = 'Promotion';
    text_box_p.innerHTML = 'eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in';
});
Juniorprofessur.addEventListener("mouseover", function(){
    text_box_heading.innerHTML = 'Juniorprofessur';
    text_box_p.innerHTML = 'quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis in eu';
});
Berufungs_verfahren.addEventListener("mouseover", function(){
    text_box_heading.innerHTML = 'Berufungs - verfahren';
    text_box_p.innerHTML = 'sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi';
});
Arbeitsplatz.addEventListener("mouseover", function(){
    text_box_heading.innerHTML = 'Arbeitsplatz';
    text_box_p.innerHTML = 'consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida';
});
Familie.addEventListener("mouseover", function(){
    text_box_heading.innerHTML = 'Familie, Partnerschaft, Alltag';
    text_box_p.innerHTML = 'duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo';
});
Mobilität.addEventListener("mouseover", function(){
    text_box_heading.innerHTML = 'Mobilität';
    text_box_p.innerHTML = 'elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum';
});
Blick_aus_dem_Ausland.addEventListener("mouseover", function(){
    text_box_heading.innerHTML = 'Blick-aus-dem-Ausland';
    text_box_p.innerHTML = 'neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis';
});
Allgemein.addEventListener("mouseover", function(){
    text_box_heading.innerHTML = 'Allgemein';
    text_box_p.innerHTML = 'malesuada fames ac turpis egestas integer eget aliquet nibh praesent tristique magna sit amet purus';
});



Promotion.addEventListener("mouseout", function(){
    text_box_heading.innerHTML = 'Karrierewege';
    text_box_p.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda cupiditate sequi quisquam, accusamus quae minima libero excepturi a pariatur ut maiores velit enim mollitia accusantium eveniet cumque nostrum aliquid.';
});
Habilitation.addEventListener("mouseout", function(){
    text_box_heading.innerHTML = 'Karrierewege';
    text_box_p.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda cupiditate sequi quisquam, accusamus quae minima libero excepturi a pariatur ut maiores velit enim mollitia accusantium eveniet cumque nostrum aliquid.';
});
Juniorprofessur.addEventListener("mouseout", function(){
    text_box_heading.innerHTML = 'Karrierewege';
    text_box_p.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda cupiditate sequi quisquam, accusamus quae minima libero excepturi a pariatur ut maiores velit enim mollitia accusantium eveniet cumque nostrum aliquid.';
});
Berufungs_verfahren.addEventListener("mouseout", function(){
    text_box_heading.innerHTML = 'Karrierewege';
    text_box_p.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda cupiditate sequi quisquam, accusamus quae minima libero excepturi a pariatur ut maiores velit enim mollitia accusantium eveniet cumque nostrum aliquid.';
});
Arbeitsplatz.addEventListener("mouseout", function(){
    text_box_heading.innerHTML = 'Karrierewege';
    text_box_p.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda cupiditate sequi quisquam, accusamus quae minima libero excepturi a pariatur ut maiores velit enim mollitia accusantium eveniet cumque nostrum aliquid.';
});
Familie.addEventListener("mouseout", function(){
    text_box_heading.innerHTML = 'Karrierewege';
    text_box_p.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda cupiditate sequi quisquam, accusamus quae minima libero excepturi a pariatur ut maiores velit enim mollitia accusantium eveniet cumque nostrum aliquid.';
});
Mobilität.addEventListener("mouseout", function(){
    text_box_heading.innerHTML = 'Karrierewege';
    text_box_p.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda cupiditate sequi quisquam, accusamus quae minima libero excepturi a pariatur ut maiores velit enim mollitia accusantium eveniet cumque nostrum aliquid.';
});
Blick_aus_dem_Ausland.addEventListener("mouseout", function(){
    text_box_heading.innerHTML = 'Karrierewege';
    text_box_p.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda cupiditate sequi quisquam, accusamus quae minima libero excepturi a pariatur ut maiores velit enim mollitia accusantium eveniet cumque nostrum aliquid.';
});
Allgemein.addEventListener("mouseout", function(){
    text_box_heading.innerHTML = 'Karrierewege';
    text_box_p.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda cupiditate sequi quisquam, accusamus quae minima libero excepturi a pariatur ut maiores velit enim mollitia accusantium eveniet cumque nostrum aliquid.';
});