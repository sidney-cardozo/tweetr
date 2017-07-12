/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  function createTweetElement (tweetObject) {
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
 }

}