/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
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

// Test / driver code (temporary). Eventually will get this from the server.
var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

$(document).ready(function() {
  renderTweets(data);
})






/*
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