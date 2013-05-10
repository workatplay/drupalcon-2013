<?php

function wap_jasmine() {
  $wap_path = drupal_get_path('module', 'wap');
  
  // CSS
  drupal_add_css($wap_path . '/jasmine/jasmine.css');
  drupal_add_css($wap_path . '/css/tests.css');
  
  // Jasmine
  drupal_add_js($wap_path . '/jasmine/jasmine.js');
  drupal_add_js($wap_path . '/jasmine/jasmine-html.js');
  
  // Dependencies: Javascript to be tested
  //drupal_add_js($wap_path . '/js/wap.js');
  
  // Helpers
  drupal_add_js($wap_path . '/js/spec-helpers.js');
  
  // Specs: Tests
  drupal_add_js($wap_path . '/js/specs/calculator-version4.js');
  
  return theme('jasmine_specrunner');
}

function wap_jasmine_xml() {
  $wap_path = drupal_get_path('module', 'wap');
  
  // CSS
  drupal_add_css($wap_path . '/jasmine/jasmine.css');
  drupal_add_css($wap_path . '/css/tests.css');
  
  // Jasmine
  drupal_add_js($wap_path . '/jasmine/jasmine.js');
  drupal_add_js($wap_path . '/jasmine/jasmine-html.js');
  drupal_add_js($wap_path . '/js/lib/jasmine-reporters/jasmine.phantomjs-reporter.js');
  
  // Dependencies: Javascript to be tested
  //drupal_add_js($wap_path . '/js/wap.js');
  
  // Helpers
  drupal_add_js($wap_path . '/js/spec-helpers.js');
  
  // Specs: Tests
  drupal_add_js($wap_path . '/js/specs/calculator-version3.js');
  
  return theme('jasmine_specrunner_xml');
}