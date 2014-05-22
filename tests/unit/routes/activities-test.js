import { test, moduleFor } from 'ember-qunit';

import Activities from 'appkit/routes/activities';
import Activity from 'appkit/models/activity';

moduleFor('route:activities', "Unit - ActivitiesRoute");

test("it exists", function(){
  ok(this.subject());
  ok(this.subject() instanceof Activities);
});

test("#model", function(){

  var store = {
    find: function() {
      return Activity.FIXTURES;
    }
  };

  var route = this.subject();

  route.set('store', store);

  deepEqual(route.model(), Activity.FIXTURES);

});
