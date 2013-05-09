<?php

function wap_jasmine() {
  $wap_path = drupal_get_path('module', 'wap');
  
  // CSS
  drupal_add_css($wap_path . '/jasmine/jasmine.css');
  
  // Jasmine
  drupal_add_js($wap_path . '/jasmine/jasmine.js');
  drupal_add_js($wap_path . '/jasmine/jasmine-html.js');
  
  // Dependencies: Javascript to be tested
  $flowplayer_config = array(
    'clip' => array(
      'url' => 'http://pseudo01.hddn.com/vod/demo.flowplayervod/flowplayer-700.flv',
      'autoPlay' => FALSE,
    ),
    'onLoad' => 'execJasmine', // start the tests after the player is loaded
  );
  $flowplayer = theme('flowplayer', array(
    'config'     => $flowplayer_config,
    'id'         => 'flowplayer-preview',
    'attributes' => array('style' => 'width:640px;height:380px;')
  ));
  
  // Helpers
  drupal_add_js($wap_path . '/js/spec-helpers.js');
  
  // Specs: Tests
  drupal_add_js($wap_path . '/js/spec/flowplayer.js');
  
  return theme('jasmine_specrunner', array('flowplayer' => $flowplayer));
}