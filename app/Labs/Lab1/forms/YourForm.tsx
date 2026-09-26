export default function YourForm() {
  return (
    <form id="wd-your-form">
      <h4>Student Profile</h4>

      <h5>Student Information</h5>

      <label htmlFor="wd-your-first-name">First Name:</label>
      <input
        type="text"
        id="wd-your-first-name"
        defaultValue="Koshin"
      />
      <br />

      <label htmlFor="wd-your-last-name">Last Name:</label>
      <input
        type="text"
        id="wd-your-last-name"
        defaultValue="Mohamed"
      />
      <br />

      <label htmlFor="wd-your-password">Password:</label>
      <input
        type="password"
        id="wd-your-password"
        placeholder="Enter password"
      />
      <br />

      <h5>About Me</h5>

      <label htmlFor="wd-your-bio">
        Why I am taking this course:
      </label>
      <br />

      <textarea
        id="wd-your-bio"
        cols={40}
        rows={5}
        defaultValue="I am taking this course to improve my web development skills and learn more about building full-stack applications."
      />
      <br />

      <h5>Class Standing</h5>

      <input
        type="radio"
        name="wd-your-class-standing"
        id="wd-your-freshman"
      />
      <label htmlFor="wd-your-freshman">Freshman</label>
      <br />

      <input
        type="radio"
        name="wd-your-class-standing"
        id="wd-your-sophomore"
      />
      <label htmlFor="wd-your-sophomore">Sophomore</label>
      <br />

      <input
        type="radio"
        name="wd-your-class-standing"
        id="wd-your-junior"
      />
      <label htmlFor="wd-your-junior">Junior</label>
      <br />

      <input
        type="radio"
        name="wd-your-class-standing"
        id="wd-your-senior"
      />
      <label htmlFor="wd-your-senior">Senior</label>
      <br />

      <input
        type="radio"
        name="wd-your-class-standing"
        id="wd-your-graduate"
        defaultChecked
      />
      <label htmlFor="wd-your-graduate">Graduate</label>
      <br />

      <h5>Enrollment Status</h5>

      <input
        type="radio"
        name="wd-your-enrollment-status"
        id="wd-your-full-time"
        defaultChecked
      />
      <label htmlFor="wd-your-full-time">Full-time</label>
      <br />

      <input
        type="radio"
        name="wd-your-enrollment-status"
        id="wd-your-part-time"
      />
      <label htmlFor="wd-your-part-time">Part-time</label>
      <br />

      <h5>Languages</h5>

      <input
        type="checkbox"
        id="wd-your-english"
        defaultChecked
      />
      <label htmlFor="wd-your-english">English</label>
      <br />

      <input
        type="checkbox"
        id="wd-your-spanish"
      />
      <label htmlFor="wd-your-spanish">Spanish</label>
      <br />

      <input
        type="checkbox"
        id="wd-your-somali"
        defaultChecked
      />
      <label htmlFor="wd-your-somali">Somali</label>
      <br />

      <h5>Major</h5>

      <label htmlFor="wd-your-major">Select Major:</label>
      <br />

      <select id="wd-your-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="BIO">Biology</option>
        <option value="PSY">Psychology</option>
        <option value="HIS">History</option>
      </select>

      <h5>Topics of Interest</h5>

      <label htmlFor="wd-your-topics">Select Topics:</label>
      <br />

      <select
        multiple
        id="wd-your-topics"
        defaultValue={["HTML", "REACT"]}
      >
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="REACT">React</option>
        <option value="NODE">Node.js</option>
      </select>

      <h5>Typed Fields</h5>

      <label htmlFor="wd-your-email">School Email:</label>
      <input
        type="email"
        id="wd-your-email"
        defaultValue="mohamed.ko@northeastern.edu"
      />
      <br />

      <label htmlFor="wd-your-grad-year">
        Expected Graduation Year:
      </label>
      <input
        type="number"
        id="wd-your-grad-year"
        defaultValue="2027"
        min={2026}
        max={2035}
      />
      <br />

      <label htmlFor="wd-your-start-date">
        Program Start Date:
      </label>
      <input
        type="date"
        id="wd-your-start-date"
      />
      <br />

      <label htmlFor="wd-your-excitement">
        Excitement About This Course (0–10):
      </label>
      <input
        type="range"
        id="wd-your-excitement"
        min="0"
        max="10"
        defaultValue="8"
      />
      <br />

      <h5>Actions</h5>

      <button id="wd-your-save" type="submit">
        Save
      </button>

      <button id="wd-your-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}