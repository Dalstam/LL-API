/* eslint-disable no-console */
/* eslint-disable node/handle-callback-err */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// ### Layput stuff ### //
'use strict';
// Replace all SVG images with inline SVG

$("img.svg").each(function () {
  const $img = $(this);
  const imgID = $img.attr("id");
  const imgClass = $img.attr("class");
  const imgURL = $img.attr("src");

  $.get(
    imgURL,
    function (data) {
      // Get the SVG tag, ignore the rest
      let $svg = $(data).find("svg");

      // Add replaced image's ID to the new SVG
      if (typeof imgID !== "undefined") {
        $svg = $svg.attr("id", imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== "undefined") {
        $svg = $svg.attr("class", imgClass + " replaced-svg");
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr("xmlns:a");

      // Replace image with new SVG
      $img.replaceWith($svg);
    },
    "xml"
  );
});

// (Used in aanmeld flow)
function stretchBg(id) {
  $(id).css("height", "");
  if (
    $(id).length &&
    $(window).height() > $(id).height() + $(id).offset().top
  ) {
    $(id).css("height", $(window).height() - $(id).offset().top + "px");
  }
}

$(document).ready(function () {
  stretchBg("#stretch-bg");
});

$(window).resize(function () {
  stretchBg("#stretch-bg");
});

// postData function
// Layout needs to have .post-busy, .post-success and .post-error elements.
// data: serialized data to post
// elementId: id of parent element, WITH #
function postData(data, elementId) {
  $(elementId + " .post-busy").show();

  $.ajax({
    type: "POST",
    url: "/api/send-email",
    headers: {
      ClientType: "TRINGTRING_SITE"
    },
    data
  })
    .success(function (result) {
      $(elementId + " .post-busy").hide();
      $(elementId + " .post-success").show();
    })
    .fail(function (error) {
      $(elementId + " .post-busy").hide();
      $(elementId + " .post-error").show();
    });
}

// ### Shop owner form ### //

function shopOwnerNext(inputId) {
  if ($(inputId).val() && $(inputId).val().length > 0) {
    $("#carousel-form").carousel("next");
  }
}

$("#shopForm").submit(function (event) {
  // Hide form
  $("#carousel-form").hide();
  // Stop form from submitting normally
  event.preventDefault();

  // Get data
  const data = {
    title: "Reactie op aanmelden bedrijf",
    company: $("#itemCompName").val(),
    name: $("#itemName").val(),
    phone: $("#itemPhone").val(),
    email: $("#itemEmail").val(),
    website: $(this)
      .find("input[name='website']")
      .val()
  };
  console.log(data);

  // Send data
  postData(data, ".shopowner-form-wrapper");
});

// ### Menu ### //
// Sidemenu
$('.mobile-nav').on('click', function () {
      $("body").toggleClass("slide-active");
});

$(document).on("ready", function () {


  $("#main-menu").after($('<div id="navbar-height-col"></div>'));

  const toggler = ".navbar-toggle";
  let currentScrollPos;

  // Swipe menu to the right
  $("body").swipe({
    swipeRight(event, direction, distance, duration, fingerCount) {
      if ($("body").hasClass("slide-active")) {
        $(toggler).on("click");
      }
    },
    threshold: 25,
    fingers: "all",
    fallbackToMouseEvents: false
  });

  // Click left of the menu
  $(document).on("click", "#slide-trans-layer", function () {
    openNav();
  });

  // Click toggle icon/hamburger icon
  $(document).on("click", ".slide-active main", function () {
    openNav();
  });


  $(document).on("click", ".hamburger-btn", function () {
    openNav();
  });
  $(document).on("click", ".mnav", function () {
    openNav();
  });
  
  function openNav(e) {
    $("body").toggleClass("slide-active");

    // Menu klap uit
    if ($("body").hasClass("slide-active")) {
      localStorage.setItem("navOpen", true);
      // Get scroll position before giving the body overflow:hidden
      currentScrollPos = $(document).scrollTop() - $(".navbar").height();

      $("main").css({
        position: "fixed",
        top: 0 - currentScrollPos + "px"
      });

      $("body").css({ overflow: "hidden" });
    } else {
      // Get scroll position
      currentScrollPos = parseInt(
        Math.abs(parseInt($("main").css("top")) - $(".navbar").height())
      );

      // Smooth klap in
      setTimeout(function () {
        $("main").css({ position: "static" });

        $("body").css({ overflow: "inherit" });

        $("html, body").scrollTop(currentScrollPos);
      }, 500);
    }
  };
});

// ### Modal ###

function closeModal(target) {
  $("body").removeClass("modal-open"); // Prevents body from scrolling when modal is open.
  $("#" + target).fadeOut("fast");
}

$(function () {
  // Show modal with ID specified in data-modal attribute of element with data-modal attribute.
  // Clicking on elements in the modal with the .close class, or clicking outside the modal closes the modal.
  $("[data-modal]").on("click", function () {
    const target = $(this).attr("data-modal");
    $("body").addClass("modal-open"); // Prevents body from scrolling when modal is open.
    $("#" + target).fadeIn("fast", function () {
      // Hide on click outside
      $(".modal").on("click", function () {
        closeModal(target);
      });
      // Hide on click
      $("#" + target)
        .find(".close")
        .on("click", function () {
          closeModal(target);
        });
      // Do not close when clicking in modal
      $(".modal-content").on("click", function (evt) {
        evt.stopPropagation();
      });
    });

    // Close menu if open
    if ($("body").hasClass("slide-active")) {
      $(toggler).on("click");
      alert();
    }
  });
});

// ### Modal form ### //

// Initialize validation
const validator = $("#modalForm").validate({
  submitHandler(form) {
    $("#content-form").hide();

    const data = {
      title: "Aanmelding beta via website (sms verstuurd)",
      phone: $("#modal-mobile").val()
    };

    // Results
    postData(data, "#appmodal");
  },
  errorPlacement(error, element) {
    console.log(error);
    $("#modal-error b").html(error);
  },
  success(error) {
    error.remove();
  }
});

// ### Bezorg from ### //

// Empty form on reload
$("#orderForm")
  .find('input[type="text"]')
  .val("");
$("#orderForm")
  .find('input[type="radio"]')
  .removeAttr("checked");

// Cache the form
const $form = $("#orderForm");

const steps = $(".pm-step").length;

// // Initialize Promin
$form.promin({
  // Progress indicator stuffs
  events: {
    change(step) {
      $("#steps .step").removeClass("previous"); // Remove from all steps
      $("#steps .step").removeClass("active"); // Remove from all steps
      $("#steps .step").off("click"); // Remove from all steps
      // Ad previous class to previous steps
      for (let i = 0; i < step; i++) {
        // Secure value of i, so it won't update within this step.
        (function (i) {
          $("#steps #step" + i)
            .addClass("previous")
            .on("click", function () {
              $form.promin("show", i);
            });
        })(i);
      }
      $("#steps #step" + step).addClass("active"); // Add to current step
    }
  }
});

// Tell the button to go to the next step
$(".navigation").on("click", function () {
  $form.promin("next");
});

// All text input
$('.pm-step input[type="text"]').on("input", function () {
  if ($(this).val().length > 0) {
    $(this)
      .parent()
      .find(".navigation")
      .removeAttr("disabled");
  } else {
    $(this)
      .parent()
      .find(".navigation")
      .attr("disabled", "disabled");
  }
});

// All radio input
$('.pm-step input[type="radio"]').on("click", function () {
  $(this)
    .parent()
    .parent()
    .find(".navigation")
    .removeAttr("disabled");
});

// Show/hide info
$(".showhide").on("click", function () {
  const i = $("#infopanel");
  const f = $("#orderForm");
  const s = $(".info").find(".step");
  if (i.css("display") === "block") {
    i.css("display", "none");
    f.css("display", "block");
    s.removeClass("active");
  } else {
    i.css("display", "block");
    f.css("display", "none");
    s.addClass("active");
  }
});
