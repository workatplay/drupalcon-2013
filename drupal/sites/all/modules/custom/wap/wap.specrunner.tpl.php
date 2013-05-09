<!-- Flowplayer element -->
<?php print $flowplayer; ?>
<!-- END Flowplayer -->

<script type="text/javascript">
  var jasmineEnv = jasmine.getEnv();
    
  (function() {
    jasmineEnv.updateInterval = 1000;
    
    var htmlReporter = new jasmine.HtmlReporter();
    
    jasmineEnv.addReporter(htmlReporter);
    
    jasmineEnv.specFilter = function(spec) {
      return htmlReporter.specFilter(spec);
    };
    
    var currentWindowOnload = window.onload;
    
    window.onload = function() {
      if (currentWindowOnload) {
        currentWindowOnload();
      }
    };
  
  })();
  
  // Called by flowplayer when done loading
  function execJasmine() {
    jasmineEnv.execute();
  }
</script>