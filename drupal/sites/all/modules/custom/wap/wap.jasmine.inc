<?php

function wap_jasmine() {
  $wap_path = drupal_get_path('module', 'wap');
  // CSS
  drupal_add_css($wap_path . '/jasmine/jasmine.css');
  
  // Jasmine
  drupal_add_js($wap_path . '/jasmine/jasmine.js');
  drupal_add_js($wap_path . '/jasmine/jasmine-html.js');
  
  // Dependencies: Javascript to be tested
  // TODO
  
  // Specs: Tests
  drupal_add_js($wap_path . '/js/spec/flowplayer.js');
  
  return theme('jasmine_specrunner');
}