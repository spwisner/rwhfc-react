import React from 'react';

export default class Mailchimp extends React.Component {
  render() {
    return (
      <div className="mailchimp-container">
        <div className="form-container">
          <div id="mc_embed_signup">
            <div className="form-header">
              <h2>Sign Up For Robert's Newsletter:</h2>
            </div>
            <form action="https://robertwhazelforcongress.us17.list-manage.com/subscribe/post?u=530cf2f2dd149ed8ce35fb567&amp;id=5c72927135" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate="">
              <div id="mc_embed_signup_scroll">
                <div className="mc-field-group">
                  <label htmlFor="mce-EMAIL">Email Address </label>
                  <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" />
                </div>
                <div id="mce-responses" className="clear">
                  <div className="response" id="mce-error-response" style={{display: "none"}}></div>
                  <div className="response" id="mce-success-response" style={{display: "none"}}></div>
                </div>
                <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_530cf2f2dd149ed8ce35fb567_5c72927135" tabIndex="-1" value="" /></div>
                <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
