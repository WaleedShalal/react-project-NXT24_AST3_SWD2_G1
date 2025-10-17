import { Form, useActionData } from "react-router";

export default function Register() {
  const actionData = useActionData();
  console.log("🚀 ~ Register ~ actionData:", actionData);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const userData = Object.fromEntries(formData.entries());
  //   console.log("🚀 ~ handleSubmit ~ userData:", userData);
  //   // send data to backend
  // };
  return (
    // <form onSubmit={handleSubmit}>
    <Form method="post">
      <div>
        <label htmlFor="user-name">User Name</label>
        <input type="text" id="user-name" name="userName" />
      </div>
      <div>
        <label htmlFor="user-email">User Email</label>
        <input type="email" id="user-email" name="userEmail" />
      </div>
      <div>
        <label htmlFor="user-age">User Age</label>
        <input type="number" id="user-age" name="userAge" />
      </div>
      <button>Submit</button>
    </Form>
    // </form>
  );
}
