import { test, moduleForModel } from 'ember-qunit';

import Activity from 'appkit/models/activity';

moduleForModel('Activity', "Unit - Activity");

test("it exists", function(){
  ok(this.subject() instanceof Activity);
});

test('#properties', function() {

  var activity = this.subject(Activity.FIXTURES[0]);

  equal(activity.get('display_id'), 'Activity1');
  equal(activity.get('type'), 'song');
  equal(activity.get('display_name'), 'On The Road Again');
  equal(activity.get('hotttnesss'), 54);
  equal(activity.get('timestamp'), 'Fri Dec 06 2013 01:05:53 GMT-0600 (CST)');
});
