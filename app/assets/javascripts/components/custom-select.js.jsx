window.CustomSelect = React.createClass({
  getInitialState: function() {
    return { choice: this.props.default,
             showList: false };
  },

  toggleList: function() {
    if (this.state.showList) {
      $(".choice-select").removeClass("expanded");
    } else {
      $(".choice-select").addClass("expanded");
    }
    this.setState({ showList: !this.state.showList });
  },
  changeSelected: function(e) {
    var newChoice = e.target.innerText;
    this.setState({ choice: newChoice });
    this.props.bubbleState(newChoice);
  },
  renderList: function() {
    if (this.state.showList) {
      var currentChoice = this.state.choice;
      return (
        <ul className="choice-list">
          {_.map(this.props.choices, function(choice) {
            if (choice === currentChoice) {
              return (<li key={"choice-select_"+choice}
                          onClick={this.changeSelected}
                          className="choice-item">
                        <span className="glyphicon glyphicon-ok"></span>
                        {choice}
                      </li>);
            } else {
              return (<li key={"choice-select_"+choice}
                          onClick={this.changeSelected}
                          className="choice-item">{choice}</li>);
            }
          }.bind(this))}
        </ul>
      );
    } else {
      return;
    }
  },
  render: function() {
    return (
      <div onClick={this.toggleList} className="choice-select-container">
        <div className="choice-select workout-input no-selection">
          {this.state.choice}
          <span className="glyphicon glyphicon-chevron-left"></span>
        </div>
        {this.renderList()}
      </div>
    );
  }
});