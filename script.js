$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('load scroll',function(){

    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if($(window).scrollTop() > 0){
      $('header').addClass('sticky');
    }else{
      $('header').removeClass('sticky');
    }

    if($(window).scrollTop() > 0){
      $('.scroll-top').show();
    }else{
      $('.scroll-top').hide();
    }

    // scroll spy 

    $('section').each(function(){

      let top = $(window).scrollTop();
      let offset = $(this).offset().top - 200;
      let id = $(this).attr('id');
      let height = $(this).height();

      if(top > offset && top < offset + height){
        $('.navbar a').removeClass('active');
        $('.navbar').find(`[href="#${id}"]`).addClass('active');
      }

    });

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500,
      'linear'
    );

  });

});




Vue.component('stat-title', {
  template: `
    <h4 class="text-sm mb-2 uppercase font-medium text-gray-500">
      <slot/>
    </h4>`
})

Vue.component('stat-num', {
  props: {
    stat: {
      type: Number,
      default: 0
    }
  },
  template: `
    <h4 class="font-mono font-medium bold text-purple-700">
      {{ stat.toLocaleString() }}
    </h4>`
})

Vue.component('card', {
  template: `
    <div class="card rounded overvlow-hidden shadow-md p-6 border border-gray-300 mb-4 md:mb-0">
      <slot />
    </div>`
})

Vue.component('alert', {
  template: `
    <div role="alert">
      <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
        <slot name="title"/>
      </div>
      <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
        <slot name="content"/>
      </div>
    </div>`
})

Vue.component('pagination', {
  props: {
    hasPrev: {
      type: Boolean,
      default: false
    },
    hasNext: {
      type: Boolean,
      default: false
    }
  },
  template: `
    <div class="pagination mt-4 flex">
      <button
        class="bg-purple-600 rounded py-2 px-4 text-white font-semibold"
        :disabled="!hasPrev"
        :class="{ 'cursor-not-allowed opacity-50': !hasPrev }"
        @click="$emit('prev')">
          &larr; Prev
      </button>
      <button
        class="bg-purple-600 rounded py-2 px-4 text-white font-semibold ml-auto"
        :disabled="!hasNext"
        :class="{ 'cursor-not-allowed opacity-50': !hasNext }"
        @click="$emit('next')">
          Next &rarr;
      </button>
    </div>`
})



