<script type="text/javascript">
  (function() {
    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var trivialReporter = new jasmine.TrivialReporter();
    var phantomJSReporter = new jasmine.PhantomJSReporter();

    jasmineEnv.addReporter(trivialReporter);
    jasmineEnv.addReporter(phantomJSReporter);

    jasmineEnv.specFilter = function(spec) {
      return trivialReporter.specFilter(spec);
    };

    jasmineEnv.execute();

  })();
</script>