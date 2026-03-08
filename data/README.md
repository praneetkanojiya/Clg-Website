# College Staff Admin Area

Welcome to the admin area! This folder acts as your Content Management System (CMS). You can easily update the website's text, notices, and courses by editing the JSON files here.

## How to update content

Open the `content.json` file in any plain text editor or code editor. You will see structured data that corresponds to what is shown on the website. 

### Updating Notices
To add a new notice to the `Notice Board`, scroll down to the `"notices": [` section.
Copy an existing notice object, paste it above the existing ones, and change the `id`, `date`, `title`, and `content`.

Example:
```json
{
  "id": 3,
  "date": "2026-03-10",
  "title": "New Notice Title",
  "content": "This is the content of the new notice."
}
```
Make sure every notice (except the last one in the list) ends with a comma!

### Updating General Information
You can also change the `collegeName`, Contact details (like `email` and `phone`), and the Hero text on the Homepage simply by replacing the text inside the quotes.

*Once you save your changes, trigger a redeployment in Vercel or Netlify (if hosting there) or rebuild the Next.js app on your server to see the updates live!*
