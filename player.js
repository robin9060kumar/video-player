var player = videojs('videoPlayer');

player.ima({
  id: 'videoPlayer',
  adTagUrl:
    'https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_ad_samples&sz=640x480&cust_params=sample_ct%3Dskippablelinear&env=vp&output=vast&unviewed_position_start=1&correlator='
});

// Start ads only on user interaction
player.ready(function () {
  player.one('play', function () {
    player.ima.initializeAdDisplayContainer();
    player.ima.requestAds();
  });
});
