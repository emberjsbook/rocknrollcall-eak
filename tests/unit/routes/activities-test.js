import { test, moduleFor } from 'ember-qunit';

import Activities from 'appkit/routes/activities';

moduleFor('route:activities', "Unit - ActivitiesRoute");

test("it exists", function(){
  ok(this.subject());
  ok(this.subject() instanceof Activities);
});
