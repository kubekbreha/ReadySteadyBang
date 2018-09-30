/**
 * Created by echovanec on 18. 12. 2014.
 */

//PPS_DELETE-NO_ANALYTICS
/*(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','_gaTrack');

_gaTrack('create', 'UA-36275678-6', 'auto');
_gaTrack('send', 'pageview');
*/
var partnerName = 'zWebStorm';
//PPS_DELETE-NO_ANALYTICS

// this event is created when user enters main menu
function analyticsOnMainMenuLoadEvent(){
    //PPS_DELETE-NO_ANALYTICS
    _gaTrack('send', 'event', 'basic', 'loaded', partnerName, 1);
    //PPS_DELETE-NO_ANALYTICS
}

// this event is created when game starts to load assets
function analyticsOnGameStartEvent(){
    //PPS_DELETE-NO_ANALYTICS
    _gaTrack('send', 'event', 'basic', 'started', partnerName, 1);
    //PPS_DELETE-NO_ANALYTICS
}

var firstRun = true;
function analyticsOnLevelStartEvent(){
    //PPS_DELETE-NO_ANALYTICS
    if (firstRun){
        _gaTrack('send', 'event', 'basic', 'play', partnerName, 1);
        firstRun = false;
    } else {
        _gaTrack('send', 'event', 'basic', 'playAgain', partnerName, 1);
    }
    //PPS_DELETE-NO_ANALYTICS
}