/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
function timeSince(date) {
  var _MS_PER_DAY = 1000 * 60 * 60 * 24;
  date = new Date(date); // converts inputed date to “js date”
  let today = new Date();

  // Discard the time and time-zone information.
  var utc1 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  var utc2 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

function createTweetElement (tweetObject) {

  var $tweet = $("<article>").addClass("tweet");

  var $header = $("<header>").addClass("clear-fix");
  $tweet.append($header);

  var $avatar = $("<img>", {src: tweetObject.user.avatars.small});
  $header.append($avatar);

  var $name = $("<h2>").text(tweetObject.user.name);
  $header.append($name);

  var $handle = $("<span>").text(tweetObject.user.handle);
  $header.append($handle);

  var $content = $("<main>").text(tweetObject.content.text);;
  $tweet.append($content);

  var $footer = $("<footer>");
  $tweet.append($footer);

  var $paraFooter = $("<p>");
  $footer.append($paraFooter);

  var s = new Date(tweetObject.created_at).toISOString();
  var $createdTime = $("<span>").text(s);
  $paraFooter.append($createdTime);

  var $icons = $("<span>").addClass("icons").html(" &#10084; &#32; &#9993; &#32;  &#9873;");
  $paraFooter.append($icons);

  return $tweet;
}

function renderTweets(tweetObjects){
  for(tweet of tweetObjects){
    $('#tweet-feed').append(createTweetElement(tweet));
  }
}

////////////////////////HERE WE START THE ACTUAL LOGIC /////////////////////////////////

$(document).ready(function() {
//        Submitting new twitter post using AJAX
  $("section.new-tweet form").on("submit", function(event){
    event.preventDefault();
    if($("section.new-tweet textarea").val() === ""){
      alert("Can not leave it blank");
    } else if($("section.new-tweet textarea").val().length > 140){
      alert("exceeded text limit");
    }
    else { $.ajax({
        method: "POST",
        url: '/tweets',
        data: $(this).serialize(),
        success: function(data){
          $('#tweet-feed').prepend(createTweetElement(data));
        }
      });
    }
  });
//   RENDERING THE TWEETS VIA AJAX CALL
  function loadTweets() {
    $.ajax({
      url: '/tweets',
      type: 'GET',
      success: function(data) {
        renderTweets(data);
      }
    });
    }
    loadTweets();

//  onClick Toggle action for Compose

  $("#toggle").click(function(){
    $(".new-tweet").slideToggle("slow").find("textarea").focus().scrollTop();

  })

})






/*   ORIGINAL HTML FOR RECREATING THE TO-BE REDERERED TWEETS
        <article class="tweet">
          <header class="clear-fix">
            <img src="http://lorempixel.com/60/60/" />
            <h2>Bill Fields</h2>
            <span> @MrFields </span>
          </header>
          <main>
             Little tweet here
          </main>
          <footer>
            <p>
              <span> 10 days ago </span>
              <span class="icons"> &#10084; &#32; &#9993; &#32;  &#9873; </span>
            </p>
          </footer>
        </article>
*/