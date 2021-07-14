export default function TodoCreate() {
  return <form>
<div><label htmlFor="title">Title:<input name="title"/></label></div>
<div><label htmlFor="content">Body:<input name="content"/></label></div>
<div><label htmlFor="completed">Completed?<input type="checkbox" name="completed"/></label></div>
<div><label htmlFor="is_archived">Archive?<input type="checkbox" name="is_archived"/></label></div>
<div><label htmlFor="date_due">Due Date:<input type="date" name="date_due"/></label></div>
<div><label htmlFor="date_completed">Completion Date:<input type="date" name="date_completed"/></label></div>

  </form>;
}
