import { useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";

import classes from "./NewsletterSignup.module.css";

function NewsletterSignup() {
  const [display, setDisplay] = useState("");
  const fetcher = useFetcher();
  const { data, state } = fetcher;
  function handleChange(event) {
    setDisplay(event.target.value);
  }
  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
      setDisplay("");
    }
  }, [data, state]);

  return (
    <fetcher.Form
      method='post'
      action='/newsletter'
      className={classes.newsletter}
    >
      <input
        type='email'
        placeholder='Sign up for newsletter...'
        aria-label='Sign up for newsletter'
        name='email'
        value={display}
        onChange={handleChange}
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
