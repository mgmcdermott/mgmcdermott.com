var React = require('react');
var Header = require('../Header/Header');

var Contact = React.createClass({
  getInitialState: function() {
    return {
      name: '',
      email: '',
      subject: '',
      content: ''
    };
  },
  render: function() {
    return (
      <div id="contact" className="mgm-container contact">
        <Header title="Contact" windowMult={3.25} />
        <div className="mgm-inner contact-inner center">
          <form onSubmit={this.submit}>
            Name: <input type="text" name="name" />
            E-mail: <input type="email" name="mail" />
            Subject: <input type="text" name="subject" />
            Comment: <input type="text" name="comment" size="50" />
            <button type="submit">Submit</button>
            <button onClick={this.clear}>Reset</button>
          </form>
        </div>
      </div>
    );
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
    .done(function() {
      this.clear();
    })
    .fail(function() {
      console.log('Failed to submit form. Please try again');
    });
  }
});

module.exports = Contact;
