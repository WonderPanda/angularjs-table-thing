// import * as CounterActions from "../../actions/counter";
import template from './app.html';

class CounterController {
  // constructor($ngRedux, $scope) {
  //   /* ngRedux will merge the requested state's slice and actions onto this,
  //   you don't need to redefine them in your controller */

  //   let unsubscribe = $ngRedux.connect(
  //     this.mapStateToThis,
  //     CounterActions
  //   )(this);
  //   $scope.$on("$destroy", unsubscribe);
  // }

  // Which part of the Redux global state does our component want to receive?
  mapStateToThis(state) {
    return {
      value: state.counter
    };
  }
}

const appComponent = {
  template: template,
  controller: CounterController
};

export default appComponent;
