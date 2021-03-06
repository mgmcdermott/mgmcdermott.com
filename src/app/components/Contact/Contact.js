var React = require('react');
var Header = require('../Header/Header');

var Contact = React.createClass({
  getInitialState: function() {
    return {
      messageSent: false,
      name: '',
      email: '',
      subject: '',
      content: ''
    };
  },
  render: function() {
    return (
      <div id="contact" className="contact center">
        <Header title="Get In Touch" windowMult={3.25} />
        <div className="mgm-inner contact-inner center">
          <form className="contact-form" onSubmit={this.submit}>
            <div className="form-info">
              <input type="text" value={this.state.name} placeholder="Name"
                onChange={this.handleInput.bind(this, 'name')}/>
              <input type="email" value={this.state.email} placeholder="Email"
                onChange={this.handleInput.bind(this, 'email')}/>
            </div>
            <div className="form-body">
              <input type="text" value={this.state.subject} placeholder="Subject"
                onChange={this.handleInput.bind(this, 'subject')}/>
              <textarea type="text" value={this.state.content}
                onChange={this.handleInput.bind(this, 'content')}/>
            </div>
            <div className="form-buttons">
              {
                this.state.messageSent ?
                  <p className="success-message">Message Sent!</p>
                :
                  <p></p>
              }
              <button className="button button-submit" type="submit">
                Submit
              </button>
              <button className="button button-reset" type="button"
                onClick={this.clear}>
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  },
  handleInput: function(name, e) {
    this.setState({
      messageSent: false
    });
    var change = {};
    change[name] = e.target.value;
    this.setState(change);
  },
  clear: function() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      content: ''
    });
  },
  submit: function(e) {
    var that = this;
    e.preventDefault();
    var opts = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      content: this.state.content
    };
    $.ajax({
      type: 'POST',
      url: 'contact',
      data: opts
    })
    .fail(function() {
    })
    .done(function() {
      that.clear();
      that.setState({
        messageSent: true
      });
    });
  }
});

module.exports = Contact;
