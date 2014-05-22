import { test, moduleFor } from 'ember-qunit';

import Activities from 'appkit/routes/activities';

moduleFor('route:activities', "Unit - ActivitiesRoute");

test("it exists", function(){
  ok(this.subject());
  ok(this.subject() instanceof Activities);
});

test("#model", function(){

  var store = {
    find: function() {
      return [{
          id: 0,
          display_id: 'Activity1',
          type: 'song',
          display_name: 'On The Road Again',
          hotttnesss: 54,
          timestamp: 'Fri Dec 06 2013 01:05:53 GMT-0600 (CST)'
        }
      ];
    }
  };

  var route = this.subject();

  route.set('store', store);

  deepEqual(route.model(), [{
      id: 0,
      display_id: 'Activity1',
      type: 'song',
      display_name: 'On The Road Again',
      hotttnesss: 54,
      timestamp: 'Fri Dec 06 2013 01:05:53 GMT-0600 (CST)'
    }
  ]);

});
